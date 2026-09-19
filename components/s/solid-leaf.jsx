import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp2j0pbsv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yp2j0pbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:solid-leaf"} {...others} />);
}

export default Component;

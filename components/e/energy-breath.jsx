import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq3m9lb1e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xq3m9lb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:energy-breath"} {...others} />);
}

export default Component;

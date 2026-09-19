import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omq0cw--l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="omq0cw--l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:master-of-arms"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmdj_zw-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hmdj_zw-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:hexagon-vertical-bars"} {...others} />);
}

export default Component;

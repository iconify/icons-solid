import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g65hvpbwb.css';
import '../../css/t/t7fjfmboq.css';
import '../../css/z/zgg5gabcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g65hvpbwb"/><path class="t7fjfmboq"/><path class="zgg5gabcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-stars-bold"} {...others} />);
}

export default Component;

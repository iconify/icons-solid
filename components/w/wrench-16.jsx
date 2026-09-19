import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rukm36byr.css';
import '../../css/y/yn96a3qrz.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGqMjJqbfE)" class="rukm36byr"/><defs><linearGradient id="SVGqMjJqbfE" x1="6.984" x2="9.394" y1="1.844" y2="14.986" gradientUnits="userSpaceOnUse"><stop class="yn96a3qrz"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:wrench-16"} {...others} />);
}

export default Component;

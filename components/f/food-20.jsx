import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab2watbzi.css';
import '../../css/n/nvdrd7iyn.css';
import '../../css/b/b90ceybhx.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGHRixmjTz)" class="ab2watbzi"/><path fill="url(#SVG3MZrXcNv)" class="nvdrd7iyn"/><defs><linearGradient id="SVGHRixmjTz" x1="10.154" x2="23.584" y1="3" y2="7.391" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVG3MZrXcNv" x1="2.577" x2="16.964" y1="3" y2="8.131" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:food-20"} {...others} />);
}

export default Component;

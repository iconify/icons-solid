import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy_kg9b2z.css';
import '../../css/f/fss_9mbuo.css';
import '../../css/b/b90ceybhx.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGqb0dceSz)" class="gy_kg9b2z"/><path fill="url(#SVGQapuBdDC)" class="fss_9mbuo"/><defs><linearGradient id="SVGqb0dceSz" x1="16.462" x2="40.694" y1="3.75" y2="11.981" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGQapuBdDC" x1="2.154" x2="29.967" y1="3.75" y2="15.086" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:food-32"} {...others} />);
}

export default Component;

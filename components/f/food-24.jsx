import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flyjl_bzs.css';
import '../../css/n/nk29jh0rd.css';
import '../../css/b/b90ceybhx.css';
import '../../css/g/g0pybxe0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGmWG5Iexg)" class="flyjl_bzs"/><path fill="url(#SVGaHraBbvQ)" class="nk29jh0rd"/><defs><linearGradient id="SVGmWG5Iexg" x1="11.923" x2="28.955" y1="3.25" y2="8.92" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient><linearGradient id="SVGaHraBbvQ" x1="2.269" x2="21.157" y1="3.25" y2="10.436" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="g0pybxe0r"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:food-24"} {...others} />);
}

export default Component;

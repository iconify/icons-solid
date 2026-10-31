import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/f-vcexvbr.css';
import '../../css/u/umdka4btn.css';
import '../../css/b/b5h59clqf.css';
import '../../css/j/j17zy6s6e.css';
import '../../css/i/iwxps-sor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5grGbcqz" x1="10.26" x2="16.26" y1="1.58" y2="21.09" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG5grGbcqz)" class="f-vcexvbr"/><path class="umdka4btn wm-a"/><path class="b5h59clqf wm-shine"/><path class="j17zy6s6e wm-shine"/><path class="iwxps-sor wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:peacock-feather"} {...others} />);
}

export default Component;

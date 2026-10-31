import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cpmj-zyag.css';
import '../../css/y/y4lxgnbtg.css';
import '../../css/d/dfuwvpm9r.css';
import '../../css/w/wn0b60jhn.css';
import '../../css/e/ek29908kl.css';
import '../../css/y/y6d_eu5he.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cpmj-zyag wm-shadow"/><path class="wm-shadow y4lxgnbtg"/><path class="dfuwvpm9r"/><path class="wn0b60jhn"/><path class="ek29908kl"/><path class="y6d_eu5he"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sailboat"} {...others} />);
}

export default Component;

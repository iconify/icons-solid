import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vn5l2bbkw.css';
import '../../css/m/mwongenbb.css';
import '../../css/u/upo0rhbsd.css';
import '../../css/i/imragy4sp.css';
import '../../css/p/phix8pbtg.css';
import '../../css/n/nz47_cc5e.css';
import '../../css/s/snkxhwbhb.css';
import '../../css/e/ex_22s75o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vn5l2bbkw wm-shadow"/><path class="mwongenbb"/><path class="upo0rhbsd"/><path class="imragy4sp"/><path class="phix8pbtg"/><path class="nz47_cc5e wm-s"/><path class="snkxhwbhb"/><path class="ex_22s75o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:user-cog"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oec_3andr.css';
import '../../css/m/mwongenbb.css';
import '../../css/u/upo0rhbsd.css';
import '../../css/i/imragy4sp.css';
import '../../css/p/phix8pbtg.css';
import '../../css/b/bn2h3mxer.css';
import '../../css/s/snkxhwbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oec_3andr wm-shadow"/><path class="mwongenbb"/><path class="upo0rhbsd"/><path class="imragy4sp"/><path class="phix8pbtg"/><path class="bn2h3mxer wm-s"/><path class="snkxhwbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:user-star"} {...others} />);
}

export default Component;

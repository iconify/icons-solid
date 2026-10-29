import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zm_b_i0vf.css';
import '../../css/e/exsqqdbgk.css';
import '../../css/v/v62ndkb9o.css';
import '../../css/f/fq34ly3dk.css';
import '../../css/f/f4wn345na.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k zm_b_i0vf"/><path class="exsqqdbgk wm-a"/><path class="v62ndkb9o wm-shadow"/><path class="fq34ly3dk wm-k"/><path class="f4wn345na wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gauge-engrave"} {...others} />);
}

export default Component;

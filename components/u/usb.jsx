import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl5-iubph.css';
import '../../css/s/snonzwbrn.css';
import '../../css/s/sl1fcoeyy.css';
import '../../css/c/cyklpg2jt.css';
import '../../css/l/lyqtd2r1c.css';
import '../../css/r/rvzzvlyxy.css';
import '../../css/g/gjfswwb6c.css';
import '../../css/i/i7r19mblv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jl5-iubph wm-shadow"/><path class="snonzwbrn"/><path class="sl1fcoeyy"/><path class="cyklpg2jt"/><path class="lyqtd2r1c"/><path class="rvzzvlyxy"/><path class="gjfswwb6c"/><path class="i7r19mblv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:usb"} {...others} />);
}

export default Component;

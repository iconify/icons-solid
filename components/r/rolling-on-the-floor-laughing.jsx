import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-xr82ymh.css';
import '../../css/g/gx-l4-v2i.css';
import '../../css/h/hinf-5bxh.css';
import '../../css/e/e-e4_ub7k.css';
import '../../css/r/rp8jalbyp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b-xr82ymh"/><path class="gx-l4-v2i"/><path class="hinf-5bxh"/><path class="e-e4_ub7k"/><path class="rp8jalbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rolling-on-the-floor-laughing"} {...others} />);
}

export default Component;

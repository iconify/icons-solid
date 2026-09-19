import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cypp3g9oc.css';
import '../../css/m/mlztb_4gl.css';
import '../../css/q/q9bs_0ber.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="cypp3g9oc"/><path class="mlztb_4gl"/><path class="q9bs_0ber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:buildings-duo"} {...others} />);
}

export default Component;

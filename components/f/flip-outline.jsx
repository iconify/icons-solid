import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m63r7jbfo.css';
import '../../css/j/j46aqcc-v.css';
import '../../css/k/kiibvmbtk.css';
import '../../css/q/q0eay4bxs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m63r7jbfo"/><path class="j46aqcc-v"/><path clip-rule="evenodd" class="kiibvmbtk"/><path class="q0eay4bxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flip-outline"} {...others} />);
}

export default Component;

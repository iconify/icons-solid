import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdtcnac0c.css';
import '../../css/e/eh6lx4har.css';
import '../../css/d/dwevdfbxv.css';
import '../../css/o/ox3_uabnm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kdtcnac0c"/><path clip-rule="evenodd" class="eh6lx4har"/><path class="dwevdfbxv"/><path clip-rule="evenodd" class="ox3_uabnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flip-1-outline"} {...others} />);
}

export default Component;

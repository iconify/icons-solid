import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttod6dbvm.css';
import '../../css/h/hi_ztfptr.css';
import '../../css/r/rnunjybvs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ttod6dbvm"/><path class="hi_ztfptr"/><path clip-rule="evenodd" class="rnunjybvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:windsock"} {...others} />);
}

export default Component;

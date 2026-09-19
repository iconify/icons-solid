import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rftmwyb_p.css';
import '../../css/b/bwcarn5wh.css';
import '../../css/m/mz5y2hvkq.css';
import '../../css/t/t8ue8_09r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rftmwyb_p"/><path class="bwcarn5wh"/><path clip-rule="evenodd" class="mz5y2hvkq"/><path class="t8ue8_09r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-line-start-outline"} {...others} />);
}

export default Component;

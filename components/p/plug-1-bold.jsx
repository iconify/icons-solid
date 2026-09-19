import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8g43fbur.css';
import '../../css/q/q5goavj-k.css';
import '../../css/y/y0yy63biz.css';
import '../../css/l/lfa756bcv.css';
import '../../css/k/k-711j9wm.css';
import '../../css/z/zz4w9tadc.css';
import '../../css/r/rfpb64b8f.css';
import '../../css/z/z7zi40b7p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x8g43fbur"/><path clip-rule="evenodd" class="q5goavj-k"/><path class="y0yy63biz"/><path clip-rule="evenodd" class="lfa756bcv"/><path class="k-711j9wm"/><path class="zz4w9tadc"/><path clip-rule="evenodd" class="rfpb64b8f"/><path class="z7zi40b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:plug-1-bold"} {...others} />);
}

export default Component;

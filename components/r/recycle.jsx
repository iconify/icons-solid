import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zeb_shwns.css';
import '../../css/p/pmmrnlbfn.css';
import '../../css/n/ni0fmjbjq.css';
import '../../css/v/voqh_0p7f.css';
import '../../css/z/zv--nortx.css';
import '../../css/k/k2zoxybtb.css';

const viewBox = {"width":99,"height":99};
const content = `<g class="ft5dv1b6b"><path class="zeb_shwns"/><path class="pmmrnlbfn"/><path class="ni0fmjbjq"/><path class="voqh_0p7f"/><path class="zv--nortx"/><path class="k2zoxybtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:recycle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lffebuyoi.css';
import '../../css/a/ayjdunboi.css';
import '../../css/z/zdm_dpb0q.css';
import '../../css/z/z04drlb1l.css';
import '../../css/v/vuvbuebdm.css';
import '../../css/k/kvhx04tnb.css';
import '../../css/a/a6gqklb2z.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="lffebuyoi"/><path class="ayjdunboi"/><path class="zdm_dpb0q"/><g class="z04drlb1l"><path class="vuvbuebdm"/><path class="kvhx04tnb"/><rect class="a6gqklb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:train"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz7-d_big.css';
import '../../css/n/nmu3ymtzu.css';
import '../../css/n/nk31stbrx.css';
import '../../css/u/u3k_djbiz.css';
import '../../css/o/okwosfecu.css';
import '../../css/t/t8ssoxmvv.css';
import '../../css/q/q4ztijb0k.css';
import '../../css/g/g-k_v2bjz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="pz7-d_big"/><path clip-rule="evenodd" class="nmu3ymtzu"/><path clip-rule="evenodd" class="nk31stbrx"/><path clip-rule="evenodd" class="u3k_djbiz"/><path class="okwosfecu"/><path clip-rule="evenodd" class="t8ssoxmvv"/><path clip-rule="evenodd" class="q4ztijb0k"/><path clip-rule="evenodd" class="g-k_v2bjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:elevator-outline"} {...others} />);
}

export default Component;

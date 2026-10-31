import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dnfidubdz.css';
import '../../css/c/cl56-ccdl.css';
import '../../css/s/s-ce_kb1q.css';
import '../../css/l/l2fpngjgy.css';
import '../../css/z/z6yx0ibhd.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dnfidubdz"/><path class="cl56-ccdl"/><path class="s-ce_kb1q wm-shine"/><path class="l2fpngjgy wm-k"/><path class="wm-a z6yx0ibhd"/><path class="wm-deco wnveq1bjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:folder-search"} {...others} />);
}

export default Component;

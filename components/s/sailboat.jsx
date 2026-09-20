import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laiw4eb2g.css';
import '../../css/y/yuzd3-b8k.css';
import '../../css/i/iahu6mbrr.css';
import '../../css/o/osby_obvu.css';
import '../../css/p/pd0pmabns.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/n/n35khgbsh.css';
import '../../css/i/i3x5tw60q.css';
import '../../css/o/ocmwcl-hl.css';
import '../../css/i/i3351objf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="laiw4eb2g"/><path class="yuzd3-b8k"/><path class="iahu6mbrr"/><path class="osby_obvu"/><path class="pd0pmabns"/><g class="rpvb-o6bq"><path class="n35khgbsh"/><path class="i3x5tw60q"/><path class="ocmwcl-hl"/><path class="i3351objf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sailboat"} {...others} />);
}

export default Component;

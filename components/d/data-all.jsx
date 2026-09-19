import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/u/u47j2_boj.css';
import '../../css/n/nwipaonmi.css';
import '../../css/i/i94q9of-p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC4hnTdtG"><g class="adexpl72i"><ellipse class="q97o_r-5j"/><path class="u47j2_boj"/><path class="nwipaonmi"/><path class="i94q9of-p"/></g></mask></defs><path mask="url(#SVGC4hnTdtG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-all"} {...others} />);
}

export default Component;

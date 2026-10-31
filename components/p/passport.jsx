import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gicwe6q8a.css';
import '../../css/i/i693_jxsz.css';
import '../../css/u/u2xuahb0j.css';
import '../../css/n/n2op0ubpx.css';
import '../../css/q/qvwj_u7kv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gicwe6q8a wm-shadow"/><path class="i693_jxsz wm-shadow"/><path class="u2xuahb0j"/><path class="n2op0ubpx"/><path class="qvwj_u7kv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:passport"} {...others} />);
}

export default Component;

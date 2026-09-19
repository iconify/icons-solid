import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e43s0tgzo.css';
import '../../css/v/v1s_wr_il.css';
import '../../css/d/dh8ft5tdt.css';
import '../../css/j/j0dfb8blc.css';
import '../../css/u/ugz1plb-j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e43s0tgzo"/><path class="v1s_wr_il"/><path clip-rule="evenodd" class="dh8ft5tdt"/><path class="j0dfb8blc"/><path class="ugz1plb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:open-book"} {...others} />);
}

export default Component;

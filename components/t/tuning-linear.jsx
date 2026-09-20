import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y0arut6ax.css';
import '../../css/e/e66wveb3k.css';
import '../../css/x/xufhgmt5t.css';
import '../../css/r/rvqvracaz.css';
import '../../css/j/jpqbvacrj.css';
import '../../css/j/jzslsxgqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y0arut6ax"/><path class="e66wveb3k"/><path class="xufhgmt5t"/><path class="rvqvracaz"/><path class="jpqbvacrj"/><path class="jzslsxgqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-linear"} {...others} />);
}

export default Component;

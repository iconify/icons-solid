import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yq5tzwbme.css';
import '../../css/s/slk4sp16n.css';
import '../../css/d/dicainbtc.css';
import '../../css/u/uibc2sgoa.css';
import '../../css/o/oid9cg9wl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yq5tzwbme"/><path class="slk4sp16n"/><path class="dicainbtc"/><path class="uibc2sgoa"/><path class="oid9cg9wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:accumulator-linear"} {...others} />);
}

export default Component;

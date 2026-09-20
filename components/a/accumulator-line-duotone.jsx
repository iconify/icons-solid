import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yq5tzwbme.css';
import '../../css/e/eak43rb5w.css';
import '../../css/g/g16nbcc0i.css';
import '../../css/d/ds4eep50x.css';
import '../../css/e/e92whkbjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yq5tzwbme"/><path class="eak43rb5w"/><path class="g16nbcc0i"/><path class="ds4eep50x"/><path class="e92whkbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:accumulator-line-duotone"} {...others} />);
}

export default Component;

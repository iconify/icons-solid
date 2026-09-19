import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/ddacnib4h.css';
import '../../css/v/vwxsdrsmr.css';
import '../../css/o/oyx227b1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ddacnib4h"/><path class="vwxsdrsmr"/><path class="oyx227b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-circle-03"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x45v0gbbp.css';
import '../../css/x/xyx153nsw.css';
import '../../css/i/i4b36nbqn.css';
import '../../css/h/h_w57hb4v.css';
import '../../css/a/acqm3gzcu.css';
import '../../css/e/e88v2dymu.css';
import '../../css/u/ucteibp9l.css';
import '../../css/u/ulc8o-bhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x45v0gbbp"/><path class="xyx153nsw"/><path class="i4b36nbqn"/><path class="h_w57hb4v"/><path class="acqm3gzcu"/><path class="e88v2dymu"/><path class="ucteibp9l"/><path class="ulc8o-bhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-line-duotone"} {...others} />);
}

export default Component;

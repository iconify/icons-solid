import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dc_0-nqwd.css';
import '../../css/h/h2oa38bsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dc_0-nqwd"/><path class="h2oa38bsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-circle-05"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c05wbm_mv.css';
import '../../css/d/d2q5xe_6h.css';
import '../../css/a/aai6gobxk.css';
import '../../css/o/okrmxubng.css';
import '../../css/f/ft95uqb0u.css';
import '../../css/w/wauzm0doo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c05wbm_mv"/><path class="d2q5xe_6h"/><path class="aai6gobxk"/><path class="okrmxubng"/><path class="ft95uqb0u"/><path class="wauzm0doo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-line-duotone"} {...others} />);
}

export default Component;

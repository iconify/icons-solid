import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hq7-kg1-l.css';
import '../../css/v/vr39ulzpl.css';
import '../../css/d/d970nk8em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hq7-kg1-l"/><path class="vr39ulzpl"/><path class="d970nk8em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-linear"} {...others} />);
}

export default Component;

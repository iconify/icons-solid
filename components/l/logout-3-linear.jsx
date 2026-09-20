import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fmg5-rbfu.css';
import '../../css/v/vgynvrhex.css';
import '../../css/g/g_eh3ebdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fmg5-rbfu"/><path class="vgynvrhex"/><path class="g_eh3ebdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-3-linear"} {...others} />);
}

export default Component;

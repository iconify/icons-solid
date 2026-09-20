import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_s1-ebcg.css';
import '../../css/w/wynvi4b6y.css';
import '../../css/y/yjubbf-wc.css';
import '../../css/n/n5c-z11mf.css';
import '../../css/r/roknq48mz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a_s1-ebcg"/><path class="wynvi4b6y"/><path class="yjubbf-wc"/><path class="n5c-z11mf"/><path class="roknq48mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:thermometer-bold-duotone"} {...others} />);
}

export default Component;

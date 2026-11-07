import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xmvx9bbmd.css';
import '../../css/w/w_9u0rbob.css';
import '../../css/m/mg9xohbul.css';
import '../../css/y/y8y0m0wuw.css';
import '../../css/l/lf0aqebqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xmvx9bbmd"/><path class="w_9u0rbob"/><path class="mg9xohbul"/><path class="y8y0m0wuw"/><path class="lf0aqebqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:command-linear"} {...others} />);
}

export default Component;

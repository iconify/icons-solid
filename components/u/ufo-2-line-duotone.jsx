import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t9y7nsmnb.css';
import '../../css/r/r56ehqgoa.css';
import '../../css/r/rg4xnib3l.css';
import '../../css/k/kejfovb9p.css';
import '../../css/k/k-84xlb3p.css';
import '../../css/q/q55h_0lpu.css';
import '../../css/g/glgfkxb0q.css';
import '../../css/u/uovqdhbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t9y7nsmnb"/><path class="r56ehqgoa"/><path class="rg4xnib3l"/><path class="kejfovb9p"/><path class="k-84xlb3p"/><path class="q55h_0lpu"/><path class="glgfkxb0q"/><path class="uovqdhbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-line-duotone"} {...others} />);
}

export default Component;

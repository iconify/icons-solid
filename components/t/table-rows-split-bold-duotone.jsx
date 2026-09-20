import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/ya1ojnb-c.css';
import '../../css/e/eiulumbot.css';
import '../../css/q/qee8h-blo.css';
import '../../css/w/wsuupmhrl.css';
import '../../css/x/x7b_uwcpy.css';
import '../../css/r/r_wiw3bhg.css';
import '../../css/b/bu8_ehbxg.css';
import '../../css/y/ygaudsjjf.css';
import '../../css/u/u11emuw3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ya1ojnb-c"/><path class="eiulumbot"/></g><path class="qee8h-blo"/><path class="wsuupmhrl"/><path class="x7b_uwcpy"/><path class="r_wiw3bhg"/><path class="bu8_ehbxg"/><path class="ygaudsjjf"/><path class="u11emuw3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-rows-split-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki9botvch.css';
import '../../css/y/yy_nqgb_x.css';
import '../../css/x/xt0_rbcbw.css';
import '../../css/y/ykek1hbyz.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="ki9botvch"/><path class="yy_nqgb_x"/><path class="xt0_rbcbw"/><path class="ykek1hbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:confront"} {...others} />);
}

export default Component;

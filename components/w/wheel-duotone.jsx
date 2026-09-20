import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/guewfbcxi.css';
import '../../css/d/d-psb1_4y.css';
import '../../css/r/rm9g1fb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="guewfbcxi"/><path clip-rule="evenodd" class="d-psb1_4y"/></g><path class="rm9g1fb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wheel-duotone"} {...others} />);
}

export default Component;

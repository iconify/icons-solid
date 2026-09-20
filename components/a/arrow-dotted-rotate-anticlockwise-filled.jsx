import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y34ic7i0z.css';
import '../../css/e/e82hv7bzc.css';
import '../../css/g/gjw7ukb_m.css';
import '../../css/p/pj5_fobgv.css';
import '../../css/d/d1s63ybjv.css';
import '../../css/u/u3llydbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y34ic7i0z"/><circle class="e82hv7bzc"/><circle class="gjw7ukb_m"/><circle class="pj5_fobgv"/><circle class="d1s63ybjv"/><path class="u3llydbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-dotted-rotate-anticlockwise-filled"} {...others} />);
}

export default Component;

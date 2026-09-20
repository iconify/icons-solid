import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ap2wj3w6d.css';
import '../../css/b/bimm2xbjr.css';
import '../../css/f/fnflbekrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ap2wj3w6d"/><path clip-rule="evenodd" class="bimm2xbjr"/><path clip-rule="evenodd" class="fnflbekrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-outline"} {...others} />);
}

export default Component;

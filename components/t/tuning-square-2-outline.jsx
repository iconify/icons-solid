import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywsz5enfb.css';
import '../../css/x/x7i5b-bwk.css';
import '../../css/n/nvkhqbcdn.css';
import '../../css/z/zz1zs89if.css';
import '../../css/z/zcjbecu6m.css';
import '../../css/w/w9-6y0bfw.css';
import '../../css/k/k9825nbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ywsz5enfb"/><path clip-rule="evenodd" class="x7i5b-bwk"/><path class="nvkhqbcdn"/><path class="zz1zs89if"/><path class="zcjbecu6m"/><path class="w9-6y0bfw"/><path clip-rule="evenodd" class="k9825nbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-2-outline"} {...others} />);
}

export default Component;

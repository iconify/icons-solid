import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg0wxlrhj.css';
import '../../css/d/d465v9bll.css';
import '../../css/v/vbc8ai-qb.css';
import '../../css/t/tpnfn4b2j.css';
import '../../css/a/ap2s0m7in.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hg0wxlrhj"/><path class="d465v9bll"/><path class="vbc8ai-qb"/><path class="tpnfn4b2j"/><path class="ap2s0m7in"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-no-charge-outline"} {...others} />);
}

export default Component;

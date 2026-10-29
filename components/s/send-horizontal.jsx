import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oyfql3bvd.css';
import '../../css/c/c8egafbkc.css';
import '../../css/u/u3s_zzbqp.css';
import '../../css/t/t7vi1f1sz.css';
import '../../css/t/tiaihyrpw.css';
import '../../css/s/shilnfbvj.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="oyfql3bvd wm-shadow"/><path class="c8egafbkc"/><path class="u3s_zzbqp"/><path class="t7vi1f1sz"/><path class="tiaihyrpw wm-shine"/><path class="shilnfbvj wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:send-horizontal"} {...others} />);
}

export default Component;

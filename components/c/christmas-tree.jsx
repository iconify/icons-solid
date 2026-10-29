import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qbudoib2c.css';
import '../../css/r/radm5ccxe.css';
import '../../css/b/bffkoebry.css';
import '../../css/l/l-dc1mxfi.css';
import '../../css/t/tp9xaovqi.css';
import '../../css/m/m2ukv9bxp.css';
import '../../css/a/aoqk1jbul.css';
import '../../css/x/x4vt-dgcn.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qbudoib2c wm-shadow"/><path class="radm5ccxe"/><path class="bffkoebry"/><path class="l-dc1mxfi"/><path class="tp9xaovqi"/><path class="m2ukv9bxp"/><path class="aoqk1jbul"/><path class="wm-deco x4vt-dgcn"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:christmas-tree"} {...others} />);
}

export default Component;

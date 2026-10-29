import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/eoc8lvbia.css';
import '../../css/c/cb-a4jema.css';
import '../../css/v/v39sxnbkv.css';
import '../../css/d/dzv8pnf1l.css';
import '../../css/f/fn073e9cw.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="eoc8lvbia wm-shadow"/><path class="cb-a4jema"/><path class="v39sxnbkv"/><path class="dzv8pnf1l"/><path class="fn073e9cw"/><path class="q_yw93bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:fan"} {...others} />);
}

export default Component;

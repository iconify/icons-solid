import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/ecc1r76fn.css';
import '../../css/i/il0ftgb3t.css';
import '../../css/q/qk9t2sbvo.css';
import '../../css/m/mbr85qbbf.css';
import '../../css/x/xyaniszzv.css';
import '../../css/b/bgk_1vb3z.css';
import '../../css/r/rj008q29w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ecc1r76fn wm-shadow"/><path class="il0ftgb3t"/><path class="qk9t2sbvo"/><path class="mbr85qbbf"/><path class="xyaniszzv"/><path class="bgk_1vb3z wm-shine"/><path class="rj008q29w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folder-open"} {...others} />);
}

export default Component;

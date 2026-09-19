import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h3h8vqtwk.css';
import '../../css/m/mtpu2lbjs.css';
import '../../css/d/dijf3d1vx.css';
import '../../css/e/ec_958bcv.css';
import '../../css/t/t1feu8b3c.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="h3h8vqtwk"/><path class="mtpu2lbjs"/><path class="dijf3d1vx"/><path class="ec_958bcv"/><path class="t1feu8b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:bower"} {...others} />);
}

export default Component;

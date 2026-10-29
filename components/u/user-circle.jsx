import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/urfmsmbcz.css';
import '../../css/f/fkv_dmx_y.css';
import '../../css/a/aznp5dw9l.css';
import '../../css/m/m77yj6b5o.css';
import '../../css/j/jpdvvir-b.css';
import '../../css/s/svdujrbce.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="urfmsmbcz wm-shadow"/><path class="fkv_dmx_y"/><path class="aznp5dw9l"/><path class="m77yj6b5o"/><path class="jpdvvir-b wm-shine"/><path class="svdujrbce wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:user-circle"} {...others} />);
}

export default Component;

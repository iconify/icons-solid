import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yxfscxvbw.css';
import '../../css/l/lfwinvqin.css';
import '../../css/b/bp35_gboy.css';
import '../../css/n/ngp0u6btv.css';
import '../../css/v/vsr8ogweh.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yxfscxvbw"/><path class="lfwinvqin"/><path class="bp35_gboy"/><path class="ngp0u6btv"/><path class="vsr8ogweh wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:fingerprint"} {...others} />);
}

export default Component;

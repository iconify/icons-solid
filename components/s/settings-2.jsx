import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uzn460lud.css';
import '../../css/a/aiyo7uy0l.css';
import '../../css/i/iee5p89bk.css';
import '../../css/y/ypitdg4_s.css';
import '../../css/t/trudrebyy.css';
import '../../css/r/rgc08_bkl.css';
import '../../css/e/eiwkpr5pm.css';
import '../../css/s/sjgcrcdjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="uzn460lud wm-shadow"/><path class="aiyo7uy0l"/><path class="iee5p89bk"/><path class="ypitdg4_s"/><path class="trudrebyy"/><path class="rgc08_bkl"/><path class="eiwkpr5pm wm-shine"/><path class="sjgcrcdjv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:settings-2"} {...others} />);
}

export default Component;

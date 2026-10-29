import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kfzdgjfdj.css';
import '../../css/y/yv49ebcfz.css';
import '../../css/l/l5_7j1bfl.css';
import '../../css/q/qpm9_0osq.css';
import '../../css/v/vph00ebgf.css';
import '../../css/r/rqj5lbbxx.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kfzdgjfdj wm-shadow"/><path class="yv49ebcfz"/><path class="l5_7j1bfl"/><path class="qpm9_0osq"/><path class="vph00ebgf wm-shine"/><path class="rqj5lbbxx wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:play"} {...others} />);
}

export default Component;

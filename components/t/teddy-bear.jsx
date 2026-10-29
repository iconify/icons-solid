import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rhik910ss.css';
import '../../css/b/bgdy1dbji.css';
import '../../css/e/etjm-e89z.css';
import '../../css/b/bqu_r3b7i.css';
import '../../css/m/motblutna.css';
import '../../css/h/hs0c-1byz.css';
import '../../css/i/i-iuj5bij.css';
import '../../css/k/ka16bdb6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rhik910ss wm-shadow"/><path class="bgdy1dbji"/><path class="etjm-e89z"/><path class="bqu_r3b7i"/><path class="motblutna"/><path class="hs0c-1byz"/><path class="i-iuj5bij wm-shine"/><path class="ka16bdb6k wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:teddy-bear"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kop-sm9sr.css';
import '../../css/g/g_bgmwb9s.css';
import '../../css/f/frdgtlb6d.css';
import '../../css/p/pes6c5b0a.css';
import '../../css/k/kftjy4byn.css';
import '../../css/k/kn-1y6pge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kop-sm9sr wm-shadow"/><path class="g_bgmwb9s"/><path class="frdgtlb6d"/><path class="pes6c5b0a"/><path class="kftjy4byn"/><path class="kn-1y6pge wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clover"} {...others} />);
}

export default Component;

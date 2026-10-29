import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qi_53e5zc.css';
import '../../css/k/k-gnfab9e.css';
import '../../css/f/fsdbgue9o.css';
import '../../css/b/bgwyi3pfa.css';
import '../../css/c/ceumm1hvf.css';
import '../../css/q/qwbh14bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qi_53e5zc wm-shadow"/><path class="k-gnfab9e"/><path class="fsdbgue9o"/><path class="bgwyi3pfa"/><path class="ceumm1hvf wm-shine"/><path class="qwbh14bjt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:passport"} {...others} />);
}

export default Component;

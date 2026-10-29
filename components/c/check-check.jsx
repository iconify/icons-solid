import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ueayf2ujq.css';
import '../../css/w/wrqu5djzi.css';
import '../../css/v/v98eknbhf.css';
import '../../css/v/vqz_0db1e.css';
import '../../css/i/inali_bjz.css';
import '../../css/g/ge6pl5b7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ueayf2ujq wm-shadow"/><path class="wrqu5djzi"/><path class="v98eknbhf"/><path class="vqz_0db1e"/><path class="inali_bjz wm-shine"/><path class="ge6pl5b7t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:check-check"} {...others} />);
}

export default Component;

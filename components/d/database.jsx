import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ojooxmb5n.css';
import '../../css/w/w8fg0mpvs.css';
import '../../css/g/gsx1sj1mp.css';
import '../../css/s/scla-6bfj.css';
import '../../css/m/mwhjhobwp.css';
import '../../css/q/qwbh14bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ojooxmb5n wm-shadow"/><path class="w8fg0mpvs"/><path class="gsx1sj1mp"/><path class="scla-6bfj"/><path class="mwhjhobwp wm-shine"/><path class="qwbh14bjt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:database"} {...others} />);
}

export default Component;

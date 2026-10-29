import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jubfw4biw.css';
import '../../css/q/qi9_q60vw.css';
import '../../css/p/p4l5xbjdi.css';
import '../../css/g/gun7zdbjv.css';
import '../../css/r/rs100acvd.css';
import '../../css/z/za6jd8hlh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jubfw4biw wm-shadow"/><path class="qi9_q60vw"/><path class="p4l5xbjdi"/><path class="gun7zdbjv"/><path class="rs100acvd wm-shine"/><path class="wm-deco za6jd8hlh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:building-2"} {...others} />);
}

export default Component;

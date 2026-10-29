import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zys37wb8f.css';
import '../../css/z/ziq_dk7wl.css';
import '../../css/v/vfw_7gc-q.css';
import '../../css/c/cv--1gg1i.css';
import '../../css/i/igsjk6beg.css';
import '../../css/s/sg6akqxiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zys37wb8f"/><path class="ziq_dk7wl"/><path class="vfw_7gc-q"/><path class="cv--1gg1i"/><path class="igsjk6beg wm-shine"/><path class="sg6akqxiv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:signature"} {...others} />);
}

export default Component;

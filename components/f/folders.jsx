import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r-wpsnh-a.css';
import '../../css/v/vk91e7l4a.css';
import '../../css/c/cez-aqblm.css';
import '../../css/y/yu2fmfx0j.css';
import '../../css/h/h44f47baq.css';
import '../../css/z/z5rw8cmsi.css';
import '../../css/o/o13nptb0a.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="r-wpsnh-a wm-shadow"/><path class="vk91e7l4a"/><path class="cez-aqblm"/><path class="yu2fmfx0j"/><path class="h44f47baq"/><path class="wm-shine z5rw8cmsi"/><path class="o13nptb0a wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folders"} {...others} />);
}

export default Component;

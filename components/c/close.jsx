import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jkwsvmi5p.css';
import '../../css/n/nqbaf4b6t.css';
import '../../css/d/dvra5obzx.css';
import '../../css/p/pn-h_uhgo.css';
import '../../css/t/tkux_x6co.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jkwsvmi5p wm-shadow"/><path class="nqbaf4b6t"/><path class="dvra5obzx"/><path class="pn-h_uhgo"/><path class="tkux_x6co wm-shine"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:close"} {...others} />);
}

export default Component;

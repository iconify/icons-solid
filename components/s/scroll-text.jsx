import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fbc8kwbwg.css';
import '../../css/w/w6wfjvf_p.css';
import '../../css/j/j5ep5hbtz.css';
import '../../css/u/uc0yabbtt.css';
import '../../css/v/v_7hlxbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fbc8kwbwg"/><path class="w6wfjvf_p wm-shine"/><path class="j5ep5hbtz wm-k"/><path class="uc0yabbtt wm-a"/><path class="v_7hlxbxf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:scroll-text"} {...others} />);
}

export default Component;

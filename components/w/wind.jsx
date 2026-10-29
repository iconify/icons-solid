import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53vmbcgz.css';
import '../../css/n/noxfgpbug.css';
import '../../css/r/rrzxg_bwy.css';
import '../../css/y/ycq3lqbpo.css';
import '../../css/i/ibyt5_blp.css';
import '../../css/t/t1flt3wdu.css';
import '../../css/d/dkdpurb3v.css';
import '../../css/c/c4hhwwbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s53vmbcgz"><path class="noxfgpbug wm-k"/><path class="rrzxg_bwy wm-k"/><path class="wm-a ycq3lqbpo"/><path class="ibyt5_blp wm-a"/><path class="t1flt3wdu wm-k"/><path class="dkdpurb3v wm-k"/><path class="c4hhwwbur wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:wind"} {...others} />);
}

export default Component;

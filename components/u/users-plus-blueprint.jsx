import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/svro0xw0q.css';
import '../../css/i/ir5ke0-br.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/v/vqdnqbceb.css';
import '../../css/f/f2eag8bio.css';
import '../../css/b/byz546bvh.css';
import '../../css/u/u_pfygsmf.css';
import '../../css/s/styekjd7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="svro0xw0q wm-deco"/><path class="ir5ke0-br wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="vqdnqbceb wm-k"/><path class="f2eag8bio wm-a"/><path class="byz546bvh wm-s"/><path class="u_pfygsmf wm-k"/><path class="styekjd7o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-plus-blueprint"} {...others} />);
}

export default Component;

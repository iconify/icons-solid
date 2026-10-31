import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyc1zx6sz.css';
import '../../css/h/hostb922x.css';
import '../../css/p/pe14n4baf.css';
import '../../css/f/fzjfzm0ai.css';
import '../../css/g/gobn0jtkg.css';
import '../../css/f/f1trrsk8q.css';
import '../../css/n/n1zgl3bbb.css';
import '../../css/h/hgwo7homs.css';
import '../../css/y/yzgl_3o7z.css';
import '../../css/o/oncv-_b1n.css';
import '../../css/p/pzsvctbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gyc1zx6sz wm-shadow"/><path class="hostb922x wm-a"/><path class="pe14n4baf wm-a"/><path class="fzjfzm0ai wm-a"/><path class="gobn0jtkg wm-a"/><path class="f1trrsk8q wm-shine"/><path class="n1zgl3bbb wm-k"/><path class="hgwo7homs wm-k"/><path class="wm-k yzgl_3o7z"/><path class="oncv-_b1n wm-k"/><path class="pzsvctbpg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:corner-up-right"} {...others} />);
}

export default Component;

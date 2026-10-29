import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/ch_0tkbkt.css';
import '../../css/n/nsf_xvbsa.css';
import '../../css/b/bc9jedb3z.css';
import '../../css/b/b-8_labjj.css';
import '../../css/q/q2phhkb3d.css';
import '../../css/c/cf49srovd.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ch_0tkbkt wm-shadow"/><path class="nsf_xvbsa"/><path class="bc9jedb3z"/><path class="b-8_labjj"/><path class="q2phhkb3d wm-shine"/><path class="cf49srovd wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bookmark-check"} {...others} />);
}

export default Component;

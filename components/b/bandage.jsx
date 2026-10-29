import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x0a32rbnp.css';
import '../../css/b/bvfmjlr8d.css';
import '../../css/l/lvcn09b_g.css';
import '../../css/b/bth1jglsn.css';
import '../../css/s/s4zt0tbdk.css';
import '../../css/w/wnl2kn7gh.css';
import '../../css/y/yqy58ybxn.css';
import '../../css/t/tf7tz4bsq.css';
import '../../css/q/q3yn863-a.css';
import '../../css/u/uvlxbpwvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x0a32rbnp"/><path class="bvfmjlr8d"/><path class="lvcn09b_g"/><path class="bth1jglsn"/><path class="s4zt0tbdk"/><path class="wnl2kn7gh"/><path class="yqy58ybxn"/><path class="tf7tz4bsq"/><path class="q3yn863-a wm-shine"/><path class="uvlxbpwvl wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bandage"} {...others} />);
}

export default Component;

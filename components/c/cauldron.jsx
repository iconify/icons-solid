import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/am9cc9y1a.css';
import '../../css/y/y769gzj8f.css';
import '../../css/c/cvimgbbzz.css';
import '../../css/r/rtt-3qb0r.css';
import '../../css/i/i08evfbqn.css';
import '../../css/h/hx783jr7y.css';
import '../../css/c/cabg2xbqn.css';
import '../../css/u/u29_bwbji.css';
import '../../css/z/zsgtf0b3g.css';
import '../../css/h/hlyvh2u7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="am9cc9y1a"/><path class="wm-s y769gzj8f"/><path class="cvimgbbzz"/><path class="rtt-3qb0r wm-shine"/><path class="i08evfbqn wm-k"/><path class="hx783jr7y wm-a"/><path class="cabg2xbqn wm-s"/><path class="u29_bwbji"/><path class="zsgtf0b3g"/><path class="hlyvh2u7z wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cauldron"} {...others} />);
}

export default Component;

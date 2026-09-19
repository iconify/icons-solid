import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h0wousbwd.css';
import '../../css/h/hihhk-b3v.css';
import '../../css/l/lr9f57apr.css';
import '../../css/p/p5ykwhtgk.css';
import '../../css/l/l-k_nibkr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h0wousbwd"/><path class="hihhk-b3v"/><path class="lr9f57apr"/><path class="p5ykwhtgk"/><path class="l-k_nibkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dribble"} {...others} />);
}

export default Component;

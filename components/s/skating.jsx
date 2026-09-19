import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfne-b7l.css';
import '../../css/i/i54lc4m9z.css';
import '../../css/x/x7iau3bso.css';
import '../../css/e/ewvg_zbis.css';
import '../../css/i/ibpcob-1a.css';
import '../../css/k/kdoye2z_j.css';
import '../../css/p/p5xjjkbxw.css';
import '../../css/v/v8cb3abna.css';
import '../../css/a/am8yaebmk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nsfne-b7l"><path class="i54lc4m9z"/><path class="x7iau3bso"/><path class="ewvg_zbis"/><path class="ibpcob-1a"/><path class="kdoye2z_j"/><path class="p5xjjkbxw"/><path class="v8cb3abna"/><path class="am8yaebmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:skating"} {...others} />);
}

export default Component;

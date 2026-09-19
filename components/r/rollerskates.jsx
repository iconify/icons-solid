import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfne-b7l.css';
import '../../css/i/i54lc4m9z.css';
import '../../css/x/x7iau3bso.css';
import '../../css/e/ewvg_zbis.css';
import '../../css/i/ibpcob-1a.css';
import '../../css/v/v8cb3abna.css';
import '../../css/v/v6ykpbcxd.css';
import '../../css/c/c0f57ki3u.css';
import '../../css/w/w1amj_bdr.css';
import '../../css/o/oas133mqj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nsfne-b7l"><path class="i54lc4m9z"/><path class="x7iau3bso"/><path class="ewvg_zbis"/><path class="ibpcob-1a"/><path class="v8cb3abna"/><path class="v6ykpbcxd"/><path class="c0f57ki3u"/><path class="w1amj_bdr"/><path class="oas133mqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rollerskates"} {...others} />);
}

export default Component;

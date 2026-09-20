import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh67gtbpz.css';
import '../../css/q/qsyaktkzi.css';
import '../../css/u/u24p-xbvw.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/l-8t94h5b.css';
import '../../css/i/inzok3vel.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nh67gtbpz"/><path class="qsyaktkzi"/><path class="u24p-xbvw"/><g class="jn8qy4bru"><path class="l-8t94h5b"/><path class="inzok3vel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:schwabisch-gmund-forum-gold-und-silber"} {...others} />);
}

export default Component;

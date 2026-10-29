import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/unjavibhe.css';
import '../../css/p/pd5qfibah.css';
import '../../css/t/t218te2ox.css';
import '../../css/b/bf8-t8bln.css';
import '../../css/j/jct2stcas.css';
import '../../css/y/yr_6gobnn.css';
import '../../css/c/c495khxsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="unjavibhe wm-deco"/><path class="pd5qfibah wm-deco"/><path class="t218te2ox wm-deco"/><path class="bf8-t8bln wm-k"/><path class="jct2stcas wm-a"/><path class="wm-k yr_6gobnn"/><path class="c495khxsn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sprout-blueprint"} {...others} />);
}

export default Component;

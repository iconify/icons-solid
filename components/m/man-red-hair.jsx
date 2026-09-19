import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsi7qksjt.css';
import '../../css/r/r-l90q7nm.css';
import '../../css/e/e3o3dzl0x.css';
import '../../css/f/fvlr6ozns.css';
import '../../css/p/phch2s8_e.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/d/d6hsydbgj.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/y/yon4pyk5q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lsi7qksjt"/><path class="r-l90q7nm"/><path class="e3o3dzl0x"/><path class="fvlr6ozns"/><path class="phch2s8_e"/><path class="ps7z7wb7n"/><path class="d6hsydbgj"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="yon4pyk5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-red-hair"} {...others} />);
}

export default Component;

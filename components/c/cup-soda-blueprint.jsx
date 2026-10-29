import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d8zkzi3mu.css';
import '../../css/g/g6un4uvbw.css';
import '../../css/t/t218te2ox.css';
import '../../css/d/dy6f-b0he.css';
import '../../css/b/b-poshbij.css';
import '../../css/x/xqnjqczxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="d8zkzi3mu wm-deco"/><path class="g6un4uvbw wm-deco"/><path class="t218te2ox wm-deco"/><path class="dy6f-b0he wm-k"/><path class="b-poshbij wm-a"/><path class="wm-a xqnjqczxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cup-soda-blueprint"} {...others} />);
}

export default Component;

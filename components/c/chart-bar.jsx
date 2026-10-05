import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j2fzmum1m.css';
import '../../css/d/d2dtmimrd.css';
import '../../css/w/wfqhd5bow.css';
import '../../css/k/k2_fi1v0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="j2fzmum1m"/><path class="d2dtmimrd"/><path class="wfqhd5bow"/><path class="k2_fi1v0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:chart-bar"} {...others} />);
}

export default Component;

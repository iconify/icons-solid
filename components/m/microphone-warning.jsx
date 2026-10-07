import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dr3q1c4he.css';
import '../../css/j/jom5s_aeb.css';
import '../../css/h/h6qh__-gv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dr3q1c4he"/><rect class="jom5s_aeb"/><path class="h6qh__-gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone-warning"} {...others} />);
}

export default Component;

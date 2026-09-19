import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/qq2-s7b1o.css';
import '../../css/h/hcsiaib7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="qq2-s7b1o"/><path class="hcsiaib7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:translate"} {...others} />);
}

export default Component;

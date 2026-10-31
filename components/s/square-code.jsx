import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/j8knk2bno.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/g/g3bv5cc4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="j8knk2bno"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="g3bv5cc4a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:square-code"} {...others} />);
}

export default Component;

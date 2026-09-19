import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgz1v2vad.css';
import '../../css/p/p7h3k3bwp.css';
import '../../css/o/o6if1gbhb.css';
import '../../css/l/lq23_jbfj.css';
import '../../css/d/dietrebfe.css';
import '../../css/e/erl-ix-yf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wgz1v2vad"/><path class="p7h3k3bwp"/><path clip-rule="evenodd" class="o6if1gbhb"/><path clip-rule="evenodd" class="lq23_jbfj"/><path clip-rule="evenodd" class="dietrebfe"/><path class="erl-ix-yf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lacrosse"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxv6qwben.css';
import '../../css/l/l62h2tbwv.css';
import '../../css/f/f-2ypwbpf.css';
import '../../css/e/er1si1bnd.css';
import '../../css/d/d60hf2t9p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jxv6qwben"/><path clip-rule="evenodd" class="l62h2tbwv"/><path class="f-2ypwbpf"/><path class="er1si1bnd"/><path class="d60hf2t9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:code-monitor-2"} {...others} />);
}

export default Component;

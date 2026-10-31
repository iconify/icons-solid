import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ok2g69b1z.css';
import '../../css/l/l71j435fl.css';
import '../../css/v/vkgg09bpx.css';
import '../../css/e/euj49csjz.css';
import '../../css/t/t5_54pbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ok2g69b1z"/><path class="l71j435fl"/><path class="vkgg09bpx wm-shine"/><path class="euj49csjz wm-k"/><path class="t5_54pbtg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:id-card"} {...others} />);
}

export default Component;

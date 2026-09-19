import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/asf7d5wcf.css';
import '../../css/o/o6wf_jbpf.css';
import '../../css/e/evm9jdbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="asf7d5wcf"/><path class="o6wf_jbpf"/><path class="evm9jdbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dome"} {...others} />);
}

export default Component;

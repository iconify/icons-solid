import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qf_kb0bbs.css';
import '../../css/a/a4gmabcpu.css';
import '../../css/m/mzxbdgbpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qf_kb0bbs"/><path class="a4gmabcpu"/><path class="mzxbdgbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:vectors-path-flat"} {...others} />);
}

export default Component;

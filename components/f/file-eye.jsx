import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pulndkbsr.css';
import '../../css/j/j5wuxdi0v.css';
import '../../css/p/p88bltb9a.css';
import '../../css/w/w2m_3fbqm.css';
import '../../css/q/qsolpuqay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pulndkbsr"/><path class="j5wuxdi0v"/><circle class="p88bltb9a"/><path class="w2m_3fbqm"/><path class="qsolpuqay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-eye"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zq3okyt3m.css';
import '../../css/h/hec4_bb-a.css';
import '../../css/i/im29qtbzp.css';
import '../../css/f/faejh19lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zq3okyt3m"/><path class="hec4_bb-a"/><path class="im29qtbzp"/><path class="faejh19lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:agent-swap"} {...others} />);
}

export default Component;

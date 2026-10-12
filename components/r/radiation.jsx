import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lowbit6ib.css';
import '../../css/r/rd323vl1n.css';
import '../../css/q/q_3utft2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lowbit6ib"/><circle transform="rotate(60 11.85 11.11)" class="rd323vl1n"/><path class="q_3utft2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:radiation"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2-cxqb-b.css';
import '../../css/i/i5ns3k62z.css';
import '../../css/q/q7ucmccqb.css';
import '../../css/t/tkniu6y8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="d2-cxqb-b"/><path class="i5ns3k62z"/><path class="q7ucmccqb"/><path class="tkniu6y8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hat-top"} {...others} />);
}

export default Component;

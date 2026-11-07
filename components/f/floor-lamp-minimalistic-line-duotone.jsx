import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/g/g40jultif.css';
import '../../css/g/g80rf7b8i.css';
import '../../css/q/qdmq4erhx.css';
import '../../css/o/omn9g2b_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="g40jultif"/><path class="g80rf7b8i"/><path class="qdmq4erhx"/><path class="omn9g2b_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-minimalistic-line-duotone"} {...others} />);
}

export default Component;

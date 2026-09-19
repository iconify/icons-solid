import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/ss97y7h8n.css';
import '../../css/q/q2kel5-0b.css';
import '../../css/f/f65fcelrc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ss97y7h8n"/><path class="q2kel5-0b"/><path class="f65fcelrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kettle-01"} {...others} />);
}

export default Component;

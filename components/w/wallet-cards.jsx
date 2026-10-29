import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/ra9pnzbjo.css';
import '../../css/q/qbat23bxh.css';
import '../../css/s/srh_45b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ra9pnzbjo wm-k"/><path class="qbat23bxh wm-a"/><path class="srh_45b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wallet-cards"} {...others} />);
}

export default Component;

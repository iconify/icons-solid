import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wocduhf9u.css';
import '../../css/q/qh_txoe1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wocduhf9u"/><path class="qh_txoe1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:more-horizontal-engrave"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/glpyvrt8s.css';
import '../../css/g/gqtz-uhbr.css';
import '../../css/d/dakzdk03i.css';
import '../../css/f/flbsvpbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="glpyvrt8s wm-k"/><path class="gqtz-uhbr wm-shadow"/><path class="dakzdk03i wm-k"/><path class="flbsvpbyj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-funnel-engrave"} {...others} />);
}

export default Component;

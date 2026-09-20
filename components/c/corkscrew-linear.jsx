import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d6yf8nbqe.css';
import '../../css/h/hfjwbrilq.css';
import '../../css/p/pxi4ntbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d6yf8nbqe"/><path class="hfjwbrilq"/><rect transform="rotate(44.97 12.113 1)" class="pxi4ntbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:corkscrew-linear"} {...others} />);
}

export default Component;

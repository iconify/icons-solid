import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qbvzs6big.css';
import '../../css/m/mv2vj3bqa.css';
import '../../css/i/icg4znpvz.css';
import '../../css/i/i-r457bof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qbvzs6big"/><path class="mv2vj3bqa wm-shadow"/><path class="icg4znpvz"/><path class="i-r457bof wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sliders-engrave"} {...others} />);
}

export default Component;

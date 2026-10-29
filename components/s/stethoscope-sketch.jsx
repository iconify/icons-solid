import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qq0gnmbmc.css';
import '../../css/p/pasc8dbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qq0gnmbmc"/><path class="pasc8dbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stethoscope-sketch"} {...others} />);
}

export default Component;

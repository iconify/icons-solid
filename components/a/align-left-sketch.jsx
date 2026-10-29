import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rtoajeejb.css';
import '../../css/p/p5v7-hblj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rtoajeejb"/><path class="p5v7-hblj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-left-sketch"} {...others} />);
}

export default Component;

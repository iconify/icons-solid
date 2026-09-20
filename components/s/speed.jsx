import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i3w0-bidx.css';
import '../../css/b/bjw6ntbil.css';
import '../../css/t/toz5ulbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="i3w0-bidx"/><path class="bjw6ntbil"/><path class="toz5ulbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:speed"} {...others} />);
}

export default Component;

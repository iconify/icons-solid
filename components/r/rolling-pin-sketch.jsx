import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ox1bypbec.css';
import '../../css/z/z_z_qlbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ox1bypbec"/><path class="z_z_qlbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rolling-pin-sketch"} {...others} />);
}

export default Component;

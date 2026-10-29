import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wr50s-93l.css';
import '../../css/p/pyp3in7xr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wr50s-93l"/><path class="pyp3in7xr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grip-horizontal-engrave"} {...others} />);
}

export default Component;

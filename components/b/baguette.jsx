import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sfinsjbyo.css';
import '../../css/i/iatecnr8o.css';
import '../../css/w/wevkxlbtt.css';
import '../../css/f/f545reb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sfinsjbyo"/><path class="iatecnr8o wm-shine"/><path class="wevkxlbtt wm-k"/><path class="f545reb7b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:baguette"} {...others} />);
}

export default Component;

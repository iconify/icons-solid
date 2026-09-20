import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rv5flcc5c.css';
import '../../css/c/cgx-c0w4c.css';
import '../../css/c/cq7_n8ezq.css';
import '../../css/y/yqxfb_bdf.css';
import '../../css/v/vgv7tvc0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rv5flcc5c"/><path class="cgx-c0w4c"/><path class="cq7_n8ezq"/><path class="yqxfb_bdf"/><path class="vgv7tvc0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:spray-paint-3"} {...others} />);
}

export default Component;

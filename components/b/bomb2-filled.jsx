import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxf8azbfy.css';
import '../../css/w/wa36r8bnm.css';
import '../../css/d/dmx_tobyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lxf8azbfy"/><path clip-rule="evenodd" class="wa36r8bnm"/><path class="dmx_tobyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bomb2-filled"} {...others} />);
}

export default Component;

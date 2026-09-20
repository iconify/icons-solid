import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk8sw4brl.css';
import '../../css/w/w0rmqb8xv.css';
import '../../css/w/wp6sh1bjn.css';
import '../../css/p/p5vlembyt.css';
import '../../css/r/r8gn-dbpd.css';
import '../../css/y/y665v0bfk.css';
import '../../css/o/obdx3ccgc.css';
import '../../css/d/d_xhe3bnw.css';
import '../../css/y/yec7pjbna.css';
import '../../css/x/xnshn9bgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mk8sw4brl"/><path class="w0rmqb8xv"/><path class="wp6sh1bjn"/><path class="p5vlembyt"/><path class="r8gn-dbpd"/><path class="y665v0bfk"/><path class="obdx3ccgc"/><path class="d_xhe3bnw"/><path class="yec7pjbna"/><path class="xnshn9bgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:car-tool-jumper-cables"} {...others} />);
}

export default Component;

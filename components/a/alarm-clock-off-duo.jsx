import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yb51hkkqm.css';
import '../../css/p/p60yrnbcc.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/t/tjmki8x4n.css';
import '../../css/t/t1khfhdyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yb51hkkqm"/><path class="p60yrnbcc wm-a"/><path class="qr4ochb5c wm-s"/><path class="tjmki8x4n"/><path class="t1khfhdyn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alarm-clock-off-duo"} {...others} />);
}

export default Component;

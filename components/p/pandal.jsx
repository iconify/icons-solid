import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q2pcvohsl.css';
import '../../css/p/pkkfi_6fi.css';
import '../../css/x/xy8yzjl3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q2pcvohsl"/><path class="pkkfi_6fi wm-a"/><path class="wm-a xy8yzjl3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pandal"} {...others} />);
}

export default Component;

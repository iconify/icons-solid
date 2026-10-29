import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/ddt-lcbtr.css';
import '../../css/l/l51s4j92b.css';
import '../../css/x/xbx3o24fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ddt-lcbtr"/><path class="l51s4j92b wm-a"/><path class="xbx3o24fa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pilcrow-duo"} {...others} />);
}

export default Component;

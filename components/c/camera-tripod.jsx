import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uitlmqh0r.css';
import '../../css/g/g_oiv7bye.css';
import '../../css/q/qexqi5bar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uitlmqh0r"/><path class="g_oiv7bye"/><circle class="qexqi5bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-tripod"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wo_awpt7h.css';
import '../../css/w/wyjl3bbib.css';
import '../../css/h/hkzmygcvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wo_awpt7h"/><path class="wyjl3bbib"/><path class="hkzmygcvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-minimalistic-bold"} {...others} />);
}

export default Component;

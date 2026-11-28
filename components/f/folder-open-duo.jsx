import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wok991bpz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mi-am0x6o.css';
import '../../css/o/oy8cx5bvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary wok991bpz"/><g class="dt0cm9dhy primary"><path class="mi-am0x6o"/><path class="oy8cx5bvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-open-duo"} {...others} />);
}

export default Component;

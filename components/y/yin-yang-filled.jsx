import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzq_7_bbq.css';
import '../../css/w/wb9-y5qxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pzq_7_bbq"/><path class="wb9-y5qxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:yin-yang-filled"} {...others} />);
}

export default Component;

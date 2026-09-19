import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydqkm3b_q.css';
import '../../css/e/e6r0cm-zy.css';
import '../../css/x/xjtbe4epn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ydqkm3b_q"/><path class="e6r0cm-zy"/><path class="xjtbe4epn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:expectorate-24px"} {...others} />);
}

export default Component;

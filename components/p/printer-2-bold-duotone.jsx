import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jj84z2b8x.css';
import '../../css/s/s7ajzb_1q.css';
import '../../css/n/ng0k-9szg.css';
import '../../css/d/d-beq0ypp.css';
import '../../css/c/cf_t_kbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jj84z2b8x"/><path class="s7ajzb_1q"/><path class="ng0k-9szg"/><path class="d-beq0ypp"/><path class="cf_t_kbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-2-bold-duotone"} {...others} />);
}

export default Component;

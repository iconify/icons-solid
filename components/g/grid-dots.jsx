import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dc73kcchm.css';
import '../../css/n/nb_gtobkg.css';
import '../../css/d/dpl1tejjx.css';
import '../../css/y/y2w0_hbmh.css';
import '../../css/d/dcgw77bis.css';
import '../../css/x/xzbk_7bof.css';
import '../../css/t/th5b1mvnq.css';
import '../../css/o/ojqotib7e.css';
import '../../css/j/jj3v-fbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="dc73kcchm"/><circle class="nb_gtobkg"/><circle class="dpl1tejjx"/><circle class="y2w0_hbmh"/><circle class="dcgw77bis"/><circle class="xzbk_7bof"/><circle class="th5b1mvnq"/><circle class="ojqotib7e"/><circle class="jj3v-fbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:grid-dots"} {...others} />);
}

export default Component;

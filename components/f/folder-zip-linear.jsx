import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ywexq_b_p.css';
import '../../css/z/zj4hq-f3s.css';
import '../../css/f/frmem9b3z.css';
import '../../css/u/u820zrbfw.css';
import '../../css/x/xxn7u2bxb.css';
import '../../css/w/wojb86weh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ywexq_b_p"/><path class="zj4hq-f3s"/><path class="frmem9b3z"/><path class="u820zrbfw"/><path class="xxn7u2bxb"/><path class="wojb86weh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-zip-linear"} {...others} />);
}

export default Component;

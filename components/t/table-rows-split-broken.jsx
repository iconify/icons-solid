import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dcow-7one.css';
import '../../css/l/l2rphre0b.css';
import '../../css/m/mgsmsibos.css';
import '../../css/x/xa5lkibuy.css';
import '../../css/s/s5mp_40sj.css';
import '../../css/d/dxu3yjbpm.css';
import '../../css/e/ene5oxz4n.css';
import '../../css/b/b1sely7dw.css';
import '../../css/m/m2niebc2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dcow-7one"/><path class="l2rphre0b"/><path class="mgsmsibos"/><path class="xa5lkibuy"/><path class="s5mp_40sj"/><path class="dxu3yjbpm"/><path class="ene5oxz4n"/><path class="b1sely7dw"/><path class="m2niebc2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-rows-split-broken"} {...others} />);
}

export default Component;

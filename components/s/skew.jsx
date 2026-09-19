import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tdyuizbqn.css';
import '../../css/l/l33zoes5a.css';
import '../../css/o/o1u583b9p.css';
import '../../css/e/ezgrq_b8g.css';
import '../../css/y/yxu6vo-xt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="tdyuizbqn"/><circle class="l33zoes5a"/><circle class="o1u583b9p"/><circle class="ezgrq_b8g"/><path class="yxu6vo-xt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:skew"} {...others} />);
}

export default Component;

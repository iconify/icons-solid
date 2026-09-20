import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dp4pq58yk.css';
import '../../css/l/l080-zbuz.css';
import '../../css/n/nca396xdw.css';
import '../../css/c/cjw43km3x.css';
import '../../css/z/zkglr3x2x.css';
import '../../css/l/l5mj12bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dp4pq58yk"/><path class="l080-zbuz"/><path class="nca396xdw"/><path class="cjw43km3x"/><path class="zkglr3x2x"/><path class="l5mj12bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-broken"} {...others} />);
}

export default Component;

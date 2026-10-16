import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh_zu2l2j.css';
import '../../css/x/x7d8rfpeh.css';
import '../../css/t/tjemk4cys.css';
import '../../css/i/irufsabzs.css';
import '../../css/w/wgnn0l6mm.css';
import '../../css/g/g-yvncbci.css';
import '../../css/e/e2qzznu2d.css';
import '../../css/c/clasmybek.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bh_zu2l2j"/><path class="x7d8rfpeh"/><path class="tjemk4cys"/><g transform="translate(-49)scale(.85333)"><circle class="irufsabzs"/><g class="wgnn0l6mm"><path class="g-yvncbci"/><path class="e2qzznu2d"/><path class="clasmybek"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nc-1x1"} {...others} />);
}

export default Component;

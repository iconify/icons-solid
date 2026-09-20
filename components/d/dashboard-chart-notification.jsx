import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lm2y_hbzh.css';
import '../../css/k/kiph3vb6t.css';
import '../../css/x/x40pc3c5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="lm2y_hbzh"/><path class="kiph3vb6t"/><path class="x40pc3c5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-chart-notification"} {...others} />);
}

export default Component;

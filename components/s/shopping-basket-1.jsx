import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wg0u-cjzd.css';
import '../../css/i/iimv1yb1w.css';
import '../../css/m/mqeg9ccnv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="wg0u-cjzd"/><path class="iimv1yb1w"/><path class="mqeg9ccnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shopping-basket-1"} {...others} />);
}

export default Component;

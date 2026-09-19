import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wekqk_h-v.css';
import '../../css/k/k9nw8bhlc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wekqk_h-v"/><path class="k9nw8bhlc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-cards-offers"} {...others} />);
}

export default Component;

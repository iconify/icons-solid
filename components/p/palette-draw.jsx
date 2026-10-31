import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sz9tglzji.css';
import '../../css/m/mdan5fbgb.css';
import '../../css/l/ldhgq_bhs.css';
import '../../css/d/d5f2c0bgw.css';
import '../../css/c/czjzac8xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><g class="sz9tglzji"><rect class="mdan5fbgb"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="28.67;0"/></rect><rect class="ldhgq_bhs"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="28.67;0"/></rect><rect class="d5f2c0bgw"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="28.67;0"/></rect></g><g opacity=".5"><rect class="czjzac8xd"><animate fill="freeze" attributeName="opacity" dur="0.2s" keyTimes="0;0.4;1" values="0;0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.58s" keySplines="0 0 1 1;0.65 0 0.35 1" keyTimes="0;0.138;1" values="28.67;28.67;0"/></rect></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:palette-draw"} {...others} />);
}

export default Component;

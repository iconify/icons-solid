import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/e/e0n6efpsm.css';
import '../../css/r/r5npsgh8x.css';
import '../../css/z/zlncnbcob.css';
import '../../css/q/qabhj6b6n.css';
import '../../css/l/ly666vgrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="e0n6efpsm"/><path class="r5npsgh8x"/><path class="zlncnbcob"/><path class="qabhj6b6n"/><path class="ly666vgrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipping-truck-style-2"} {...others} />);
}

export default Component;

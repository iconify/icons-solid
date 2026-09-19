import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skb8opsgk.css';
import '../../css/q/qel8s913f.css';
import '../../css/f/fvxa0x2ag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="skb8opsgk"/><path class="qel8s913f"/><path class="fvxa0x2ag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:router"} {...others} />);
}

export default Component;

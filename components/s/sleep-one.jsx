import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/itv3zkb-v.css';
import '../../css/v/vr4pazb5z.css';
import '../../css/l/lmmvibc1y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="itv3zkb-v"/><path class="vr4pazb5z"/><path class="lmmvibc1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sleep-one"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tpnnk8b6f.css';
import '../../css/f/fc-04mbga.css';
import '../../css/t/tqo708jot.css';
import '../../css/o/o6vxszbzk.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="tpnnk8b6f"/><path class="fc-04mbga"/><path class="tqo708jot"/><path class="o6vxszbzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:grill"} {...others} />);
}

export default Component;

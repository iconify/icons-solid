import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/r5_lmzb8s.css';
import '../../css/d/d7vrg_b1x.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="r5_lmzb8s"/><path class="d7vrg_b1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:maximize-2"} {...others} />);
}

export default Component;

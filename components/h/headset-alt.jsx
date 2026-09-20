import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/knq9fubwy.css';
import '../../css/s/sd0mhnblc.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="knq9fubwy"/><path class="sd0mhnblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:headset-alt"} {...others} />);
}

export default Component;

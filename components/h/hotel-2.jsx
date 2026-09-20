import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e-aq4gbtp.css';
import '../../css/s/s6_o8gbkt.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="e-aq4gbtp"/><path class="s6_o8gbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:hotel-2"} {...others} />);
}

export default Component;

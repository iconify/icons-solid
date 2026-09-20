import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/eh8po51gx.css';
import '../../css/k/k0tem2btx.css';
import '../../css/o/ofonheb_q.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="eh8po51gx"/><path class="k0tem2btx"/><path class="ofonheb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:goal"} {...others} />);
}

export default Component;

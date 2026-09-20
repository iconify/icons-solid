import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e55z5e0sb.css';
import '../../css/s/s57r1zbzd.css';
import '../../css/f/fhdna9knv.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="e55z5e0sb"/><path class="s57r1zbzd"/><path class="fhdna9knv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:chart-column-grow"} {...others} />);
}

export default Component;

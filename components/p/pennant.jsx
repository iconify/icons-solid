import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xs89f78ex.css';
import '../../css/n/nmqind1sb.css';
import '../../css/g/gh0095zbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xs89f78ex"/><path class="nmqind1sb"/><path class="gh0095zbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pennant"} {...others} />);
}

export default Component;

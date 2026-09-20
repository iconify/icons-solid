import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u9_q4t0ha.css';
import '../../css/c/cjo35jp_h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u9_q4t0ha"/><path class="cjo35jp_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:half-star-2"} {...others} />);
}

export default Component;

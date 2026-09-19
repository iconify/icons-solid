import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/skuel3ujt.css';
import '../../css/u/u6uh8ob_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="skuel3ujt"/><path class="u6uh8ob_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:verified-badge"} {...others} />);
}

export default Component;

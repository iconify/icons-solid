import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/apm8-du2p.css';
import '../../css/l/l8-wj2b7a.css';
import '../../css/u/uvhw23bgc.css';
import '../../css/q/q_e7l7bej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="apm8-du2p wm-shadow"/><path class="l8-wj2b7a wm-shadow"/><path class="uvhw23bgc"/><path class="q_e7l7bej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mail-open"} {...others} />);
}

export default Component;

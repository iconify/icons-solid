import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kv90ml4aw.css';
import '../../css/p/pnrtbeb0m.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/j/jtil8bcce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kv90ml4aw"/><path class="pnrtbeb0m"/><circle class="h_tsn8bxt"/><path class="jtil8bcce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-2-line-duotone"} {...others} />);
}

export default Component;

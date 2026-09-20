import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/kzfjwrb7m.css';
import '../../css/i/ip1yw_bwy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="kzfjwrb7m"/><path class="ip1yw_bwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-bubble-text-square"} {...others} />);
}

export default Component;

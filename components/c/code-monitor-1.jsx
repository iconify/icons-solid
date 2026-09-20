import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e6oa9qzsv.css';
import '../../css/w/w7l898bvo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="e6oa9qzsv"/><path class="w7l898bvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:code-monitor-1"} {...others} />);
}

export default Component;

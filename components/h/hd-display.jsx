import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dvg-mhlmx.css';
import '../../css/q/qpm_gor2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dvg-mhlmx"/><path class="qpm_gor2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hd-display"} {...others} />);
}

export default Component;

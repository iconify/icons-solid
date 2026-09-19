import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ffrak0b0s.css';
import '../../css/n/nqrwakdsg.css';
import '../../css/q/qg4l4xbso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ffrak0b0s"/><path class="nqrwakdsg"/><path class="qg4l4xbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:global-refresh"} {...others} />);
}

export default Component;

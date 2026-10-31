import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bc6ll9ksr.css';
import '../../css/n/nd4_eabip.css';
import '../../css/n/ngiiyccfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bc6ll9ksr wm-shadow"/><path class="nd4_eabip wm-shadow"/><path class="ngiiyccfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevron-first"} {...others} />);
}

export default Component;

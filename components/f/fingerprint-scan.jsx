import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3i-qdbpg.css';
import '../../css/q/qczxqyhuq.css';
import '../../css/d/dc6f6mrll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3i-qdbpg"/><path class="qczxqyhuq"/><path class="dc6f6mrll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fingerprint-scan"} {...others} />);
}

export default Component;

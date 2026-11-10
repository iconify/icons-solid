import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0qbhmb0w.css';
import '../../css/y/ydy8hr9lg.css';
import '../../css/t/tc8n0wb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t0qbhmb0w"/><path class="ydy8hr9lg"/><path class="tc8n0wb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sim-card"} {...others} />);
}

export default Component;

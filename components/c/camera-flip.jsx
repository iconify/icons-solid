import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfe-79p2q.css';
import '../../css/w/wz-xrm3xs.css';
import '../../css/g/g3w3r8s1h.css';
import '../../css/n/nl3386b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zfe-79p2q"/><path class="wz-xrm3xs"/><path class="g3w3r8s1h"/><path class="nl3386b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera-flip"} {...others} />);
}

export default Component;

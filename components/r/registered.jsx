import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ige_o2b4i.css';
import '../../css/p/p6hwfbxzn.css';
import '../../css/r/rr6cc1z5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ige_o2b4i"/><path class="p6hwfbxzn"/><path class="rr6cc1z5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:registered"} {...others} />);
}

export default Component;

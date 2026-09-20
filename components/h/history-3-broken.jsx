import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/ms8v4qbfc.css';
import '../../css/a/azv323yuq.css';
import '../../css/u/uqhik9b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ms8v4qbfc"/><path class="azv323yuq"/><path class="uqhik9b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-3-broken"} {...others} />);
}

export default Component;

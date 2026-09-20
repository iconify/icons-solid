import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/m/mpxg75-ll.css';
import '../../css/p/pun52ub0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="mpxg75-ll"/><path class="pun52ub0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-broken"} {...others} />);
}

export default Component;

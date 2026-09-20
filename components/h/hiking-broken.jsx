import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/p/pun52ub0q.css';
import '../../css/r/rt-a0zb8h.css';
import '../../css/h/h6ikd3bsu.css';
import '../../css/m/mx2h-ui3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="pun52ub0q"/><path class="rt-a0zb8h"/><path class="h6ikd3bsu"/><path class="mx2h-ui3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-broken"} {...others} />);
}

export default Component;

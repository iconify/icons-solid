import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/p/pun52ub0q.css';
import '../../css/w/wjmjm45ch.css';
import '../../css/c/cu7xy9b9y.css';
import '../../css/m/mx2h-ui3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="pun52ub0q"/><path class="wjmjm45ch"/><path class="cu7xy9b9y"/><path class="mx2h-ui3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-linear"} {...others} />);
}

export default Component;

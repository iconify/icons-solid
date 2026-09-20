import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mlv6tlbcz.css';
import '../../css/k/k7j1so51n.css';
import '../../css/p/p6xi2ub-t.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n1lsf0bnc"><path class="mlv6tlbcz"/><path class="k7j1so51n"/><path class="p6xi2ub-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:add-application"} {...others} />);
}

export default Component;

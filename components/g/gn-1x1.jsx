import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/k/k44umgs5h.css';
import '../../css/m/mrpvzrb1u.css';
import '../../css/n/n4_dgpclb.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="k44umgs5h"/><path class="mrpvzrb1u"/><path class="n4_dgpclb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gn-1x1"} {...others} />);
}

export default Component;

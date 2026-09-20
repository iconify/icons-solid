import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv_vv6bcm.css';
import '../../css/h/h0l56x3zd.css';
import '../../css/j/jno6wvb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nv_vv6bcm"><path class="h0l56x3zd"/><path class="jno6wvb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-path-clock-solid"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jpl_0rwdp.css';
import '../../css/a/ar26nubux.css';
import '../../css/w/wc7iz8b7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jpl_0rwdp"/><path class="ar26nubux"/><path class="wc7iz8b7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gps-off-01"} {...others} />);
}

export default Component;

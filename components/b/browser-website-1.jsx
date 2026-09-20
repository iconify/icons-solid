import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/h/h0s2ezbxb.css';
import '../../css/p/pqzfv4bgn.css';
import '../../css/u/u2wj6rv4e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="h0s2ezbxb"/><path class="pqzfv4bgn"/><path class="u2wj6rv4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:browser-website-1"} {...others} />);
}

export default Component;

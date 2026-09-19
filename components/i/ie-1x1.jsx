import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/erzf03bmv.css';
import '../../css/w/w0rvml_7c.css';
import '../../css/s/sqhuey_dp.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="erzf03bmv"/><path class="w0rvml_7c"/><path class="sqhuey_dp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ie-1x1"} {...others} />);
}

export default Component;

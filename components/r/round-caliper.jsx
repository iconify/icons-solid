import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/geju8gabu.css';
import '../../css/l/lls11sb2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="geju8gabu"/><path class="lls11sb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:round-caliper"} {...others} />);
}

export default Component;

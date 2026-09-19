import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/geju8gabu.css';
import '../../css/o/ov_0_zb1l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="geju8gabu"/><path class="ov_0_zb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:round-mask"} {...others} />);
}

export default Component;

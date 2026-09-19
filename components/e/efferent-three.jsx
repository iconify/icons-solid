import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g0b7dcc4g.css';
import '../../css/k/kblvoyb5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g0b7dcc4g"/><path class="kblvoyb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:efferent-three"} {...others} />);
}

export default Component;

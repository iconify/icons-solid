import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u20f8vsnm.css';
import '../../css/b/bvszfhbhc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="u20f8vsnm"/><path class="bvszfhbhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mirror-two"} {...others} />);
}

export default Component;

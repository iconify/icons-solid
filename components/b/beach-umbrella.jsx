import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jycvn840o.css';
import '../../css/y/y3xg51wix.css';
import '../../css/p/pqa1ftavv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jycvn840o"/><path class="y3xg51wix"/><path class="pqa1ftavv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:beach-umbrella"} {...others} />);
}

export default Component;

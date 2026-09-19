import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f9s4vsbrh.css';
import '../../css/i/i12exnb1u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="f9s4vsbrh"/><path class="i12exnb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:heart-rate"} {...others} />);
}

export default Component;

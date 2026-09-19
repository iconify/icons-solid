import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p4o9bsbmc.css';
import '../../css/i/ikqbc8xkq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="p4o9bsbmc"/><path class="ikqbc8xkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:diamonds"} {...others} />);
}

export default Component;

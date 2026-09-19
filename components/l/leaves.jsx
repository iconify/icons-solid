import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w-8jjksfh.css';
import '../../css/p/p6qh4xb_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="w-8jjksfh"/><path class="p6qh4xb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:leaves"} {...others} />);
}

export default Component;

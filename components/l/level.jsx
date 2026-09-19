import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d2nr6db3t.css';
import '../../css/n/ne4zzcnnq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d2nr6db3t"/><path class="ne4zzcnnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:level"} {...others} />);
}

export default Component;

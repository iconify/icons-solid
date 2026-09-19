import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yekuccbwe.css';
import '../../css/b/bkgt1akyr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="yekuccbwe"/><path class="bkgt1akyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chart-line"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r41g3tbnt.css';
import '../../css/l/l4om5acet.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="r41g3tbnt"/><path class="l4om5acet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:redo"} {...others} />);
}

export default Component;

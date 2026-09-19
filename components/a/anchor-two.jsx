import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bb8tv3klv.css';
import '../../css/o/o74ozbcru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bb8tv3klv"/><path clip-rule="evenodd" class="o74ozbcru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:anchor-two"} {...others} />);
}

export default Component;

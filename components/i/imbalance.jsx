import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d08qanr9p.css';
import '../../css/k/kbripl17p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="d08qanr9p"/><path clip-rule="evenodd" class="kbripl17p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:imbalance"} {...others} />);
}

export default Component;

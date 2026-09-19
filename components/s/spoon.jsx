import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fo9q7n9ez.css';
import '../../css/o/ocruyxbsi.css';
import '../../css/q/qoybt6q_l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="fo9q7n9ez"/><path class="ocruyxbsi"/><rect class="qoybt6q_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:spoon"} {...others} />);
}

export default Component;

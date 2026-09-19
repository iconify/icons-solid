import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sjlfvghmr.css';
import '../../css/x/x0e8mvpdz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="sjlfvghmr"/><path class="x0e8mvpdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:network-tree"} {...others} />);
}

export default Component;

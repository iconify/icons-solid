import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/c/cmydvqi2y.css';
import '../../css/n/nnzwf92qp.css';
import '../../css/p/p4pt-_5pv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="cmydvqi2y"/><path class="nnzwf92qp"/><path class="p4pt-_5pv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:acceleration"} {...others} />);
}

export default Component;

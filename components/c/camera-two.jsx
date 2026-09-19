import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq65a4e6h.css';
import '../../css/v/v40rf1bhl.css';
import '../../css/v/vbyp6jb4e.css';
import '../../css/l/l4y0xgwkr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="dq65a4e6h"/><path class="v40rf1bhl"/><circle class="vbyp6jb4e"/><circle class="l4y0xgwkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:camera-two"} {...others} />);
}

export default Component;

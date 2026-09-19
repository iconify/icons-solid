import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uds0vsguf.css';
import '../../css/d/d4nlxs3wn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="uds0vsguf"/><rect class="d4nlxs3wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:commuter-bag"} {...others} />);
}

export default Component;

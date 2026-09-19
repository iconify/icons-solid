import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wy2fffbal.css';
import '../../css/p/pt3ta8bfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="wy2fffbal"/><path class="pt3ta8bfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:schedule"} {...others} />);
}

export default Component;

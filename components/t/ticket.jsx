import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/d/do3-46sfv.css';
import '../../css/d/dkfj0ub_t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="do3-46sfv"/><path class="dkfj0ub_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ticket"} {...others} />);
}

export default Component;

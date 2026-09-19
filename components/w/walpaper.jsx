import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r4o9d8iox.css';
import '../../css/v/vjoy73b1l.css';
import '../../css/r/rvnmxopdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r4o9d8iox"/><circle class="vjoy73b1l"/><path class="rvnmxopdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:walpaper"} {...others} />);
}

export default Component;

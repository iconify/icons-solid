import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbs4k4y6n.css';
import '../../css/m/mp6yglb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rbs4k4y6n"/><path class="mp6yglb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:select-edge-3d"} {...others} />);
}

export default Component;

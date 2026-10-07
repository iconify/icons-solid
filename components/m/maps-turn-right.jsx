import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_24xr3ii.css';
import '../../css/r/rw674hbep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x_24xr3ii"/><path class="rw674hbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:maps-turn-right"} {...others} />);
}

export default Component;

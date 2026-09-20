import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e35pomtwe.css';
import '../../css/v/vd6q9kbib.css';
import '../../css/m/mrj31bc2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e35pomtwe"/><path class="vd6q9kbib"/><path class="mrj31bc2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filter-tick"} {...others} />);
}

export default Component;

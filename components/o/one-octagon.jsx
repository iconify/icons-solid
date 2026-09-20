import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gv5z09r1c.css';
import '../../css/c/cgk8wsbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gv5z09r1c"/><path class="cgk8wsbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:one-octagon"} {...others} />);
}

export default Component;

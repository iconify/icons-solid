import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uh4d2ifwt.css';
import '../../css/c/cgk8wsbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uh4d2ifwt"/><path class="cgk8wsbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-v-octagon"} {...others} />);
}

export default Component;

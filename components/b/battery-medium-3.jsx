import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_tsh2bdz.css';
import '../../css/s/su7eb7b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j_tsh2bdz"/><path class="su7eb7b6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:battery-medium-3"} {...others} />);
}

export default Component;

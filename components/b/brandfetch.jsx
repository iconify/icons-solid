import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m9gvb_61p.css';
import '../../css/p/p7ow52smq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m9gvb_61p"/><path class="p7ow52smq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:brandfetch"} {...others} />);
}

export default Component;

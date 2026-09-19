import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd88_0z7r.css';
import '../../css/e/ejd3y0bmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gd88_0z7r"/><path class="ejd3y0bmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-08"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vevogyb6t.css';
import '../../css/k/k40_1zb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vevogyb6t"/><path class="k40_1zb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:iteration-ccw"} {...others} />);
}

export default Component;

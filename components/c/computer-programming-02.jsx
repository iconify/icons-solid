import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vx-w8x1vz.css';
import '../../css/y/y0iq8qwff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vx-w8x1vz"/><path class="y0iq8qwff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:computer-programming-02"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lov_webcn.css';
import '../../css/b/b1q3_cb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lov_webcn"/><path class="b1q3_cb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:capcut-rectangle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhu3-j6_p.css';
import '../../css/l/lu4r1yadz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhu3-j6_p"/><path class="lu4r1yadz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:heartbreak"} {...others} />);
}

export default Component;

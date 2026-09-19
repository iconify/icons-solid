import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k0djvrb-l.css';
import '../../css/k/k6tnq_b3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k0djvrb-l"/><path class="k6tnq_b3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smart-phone-03"} {...others} />);
}

export default Component;

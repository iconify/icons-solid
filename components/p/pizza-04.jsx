import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdif0rbop.css';
import '../../css/h/hsdor7bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qdif0rbop"/><path class="hsdor7bvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pizza-04"} {...others} />);
}

export default Component;

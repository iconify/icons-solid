import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_ggmwbci.css';
import '../../css/e/ea16a_pnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y_ggmwbci"/><path class="ea16a_pnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-minus"} {...others} />);
}

export default Component;

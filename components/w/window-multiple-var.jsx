import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yd38mdbby.css';
import '../../css/y/y_yf2fhyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yd38mdbby"/><path class="y_yf2fhyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:window-multiple-var"} {...others} />);
}

export default Component;

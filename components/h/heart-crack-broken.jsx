import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmxynkbul.css';
import '../../css/v/vdghd-b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jmxynkbul"/><path class="vdghd-b8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-crack-broken"} {...others} />);
}

export default Component;

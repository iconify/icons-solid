import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9wzzxzrj.css';
import '../../css/x/x44491btz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g9wzzxzrj"/><path class="x44491btz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:analytics-up"} {...others} />);
}

export default Component;

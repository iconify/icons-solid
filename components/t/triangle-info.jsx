import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7g02bcco.css';
import '../../css/a/at-qos4ak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y7g02bcco"/><path class="at-qos4ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:triangle-info"} {...others} />);
}

export default Component;

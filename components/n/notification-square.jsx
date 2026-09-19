import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b-u7_9jwl.css';
import '../../css/w/wn3v1l47v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b-u7_9jwl"/><path class="wn3v1l47v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-square"} {...others} />);
}

export default Component;

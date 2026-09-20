import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywqj-vt6b.css';
import '../../css/a/ap54ysb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywqj-vt6b"/><path class="ap54ysb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:course-up-line-duotone"} {...others} />);
}

export default Component;

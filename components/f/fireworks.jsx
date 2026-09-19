import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzvy_2b4u.css';
import '../../css/i/iuqi5qz7v.css';
import '../../css/f/f32r_rwqo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hzvy_2b4u"/><path class="iuqi5qz7v"/><path class="f32r_rwqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fireworks"} {...others} />);
}

export default Component;

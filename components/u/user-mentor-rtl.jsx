import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck8kczb8t.css';
import '../../css/c/c-tt48brq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ck8kczb8t"/><circle class="c-tt48brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-mentor-rtl"} {...others} />);
}

export default Component;

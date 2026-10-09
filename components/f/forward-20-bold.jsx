import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao5pawu6s.css';
import '../../css/v/v-ad93beh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ao5pawu6s"/><path class="v-ad93beh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forward-20-bold"} {...others} />);
}

export default Component;

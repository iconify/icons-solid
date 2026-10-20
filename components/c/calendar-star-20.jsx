import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4_udjxz.css';
import '../../css/a/af6s1vcxw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ti4_udjxz"/><path class="af6s1vcxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-star-20"} {...others} />);
}

export default Component;

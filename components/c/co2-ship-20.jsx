import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze_xj8buq.css';
import '../../css/u/uu-b3jbqp.css';
import '../../css/i/iktbjzb3s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ze_xj8buq"/><path class="uu-b3jbqp"/><path class="iktbjzb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:co2-ship-20"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvqvd8b3b.css';
import '../../css/g/gn4khsb2a.css';
import '../../css/r/rk9itfnss.css';
import '../../css/y/ylz7_1wek.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rvqvd8b3b"/><path class="gn4khsb2a"/><path class="rk9itfnss"/><path class="ylz7_1wek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cooker-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnkuq4b8x.css';
import '../../css/t/tz4q3ccfx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cnkuq4b8x"/><path class="tz4q3ccfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toaster-20-bold"} {...others} />);
}

export default Component;

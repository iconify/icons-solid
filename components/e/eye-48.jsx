import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmxr2fy_x.css';
import '../../css/j/j3eacdoxs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bmxr2fy_x"/><path class="j3eacdoxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-48"} {...others} />);
}

export default Component;

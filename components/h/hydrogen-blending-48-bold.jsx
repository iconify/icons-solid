import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1u8_-b9b.css';
import '../../css/a/a_6bvzblh.css';
import '../../css/d/d32_g_rfi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v1u8_-b9b"/><path class="a_6bvzblh"/><path class="d32_g_rfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-blending-48-bold"} {...others} />);
}

export default Component;

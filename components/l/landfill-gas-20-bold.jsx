import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tluui_b4e.css';
import '../../css/t/tl_h0kbso.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tluui_b4e"/><path class="tl_h0kbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landfill-gas-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_ctiwi9q.css';
import '../../css/y/y_finwbhi.css';
import '../../css/l/lzsp7m9hf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c_ctiwi9q"/><path class="y_finwbhi"/><path class="lzsp7m9hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:virtual-power-plant-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya_ke-i5o.css';
import '../../css/v/vliuxwelf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ya_ke-i5o"/><path class="vliuxwelf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:junction-box-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi7uye37o.css';
import '../../css/c/cuecz6ezx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fi7uye37o"/><path class="cuecz6ezx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:files-48-bold"} {...others} />);
}

export default Component;

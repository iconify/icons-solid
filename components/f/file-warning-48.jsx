import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/i/ie_5nbw3o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="ie_5nbw3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-warning-48"} {...others} />);
}

export default Component;

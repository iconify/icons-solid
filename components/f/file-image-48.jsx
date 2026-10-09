import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dezwopb-j.css';
import '../../css/n/nc33dtbgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dezwopb-j"/><path class="nc33dtbgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-image-48"} {...others} />);
}

export default Component;

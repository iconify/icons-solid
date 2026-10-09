import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw3xuy-8f.css';
import '../../css/l/ldri-y0et.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fw3xuy-8f"/><path class="ldri-y0et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:forward-48"} {...others} />);
}

export default Component;

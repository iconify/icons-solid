import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uayzpq5gn.css';
import '../../css/h/hokpvi8xa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uayzpq5gn"/><path class="hokpvi8xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jersey-48-bold"} {...others} />);
}

export default Component;

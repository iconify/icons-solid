import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avjgpmkfp.css';
import '../../css/z/z9ie_hbca.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="avjgpmkfp"/><path class="z9ie_hbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-truck-48-bold"} {...others} />);
}

export default Component;

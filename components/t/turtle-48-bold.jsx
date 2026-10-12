import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffeqeoqqx.css';
import '../../css/x/x5va96bez.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ffeqeoqqx"/><path class="x5va96bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turtle-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezsp4f-sb.css';
import '../../css/w/w24yo_x-x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ezsp4f-sb"/><path class="w24yo_x-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:table-tennis-48-bold"} {...others} />);
}

export default Component;

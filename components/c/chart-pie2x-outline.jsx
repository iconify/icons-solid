import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msnimri5u.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="msnimri5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-pie2x-outline"} {...others} />);
}

export default Component;

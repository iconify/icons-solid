import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4r4-xbdp.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="q4r4-xbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:high-temp-outline"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k73fajykc.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="k73fajykc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-mask-n95"} {...others} />);
}

export default Component;

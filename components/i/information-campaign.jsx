import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_m39d9gr.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="k_m39d9gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:information-campaign"} {...others} />);
}

export default Component;

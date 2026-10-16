import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uww01kbpv.css';
import '../../css/i/ifa5gsbzy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uww01kbpv"/><path class="ifa5gsbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:disconnector-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tblo-pfoi.css';
import '../../css/s/s26yw0bri.css';
import '../../css/m/mdbg4dcqd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tblo-pfoi"/><path clip-rule="evenodd" class="s26yw0bri"/><path clip-rule="evenodd" class="mdbg4dcqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:alpinejs-wordmark"} {...others} />);
}

export default Component;

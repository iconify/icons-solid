import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm3ejky-b.css';
import '../../css/p/pe7z2bb3j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mm3ejky-b"/><path class="pe7z2bb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-transit-gateway"} {...others} />);
}

export default Component;

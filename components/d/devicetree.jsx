import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7lh0s6zx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p7lh0s6zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:devicetree"} {...others} />);
}

export default Component;

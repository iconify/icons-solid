import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_9vdtigo.css';
import '../../css/e/etu-42buw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_9vdtigo"/><path class="etu-42buw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:klipper"} {...others} />);
}

export default Component;

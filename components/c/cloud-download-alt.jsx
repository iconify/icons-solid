import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovljs7waa.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="ovljs7waa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cloud-download-alt"} {...others} />);
}

export default Component;

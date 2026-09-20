import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn54w67rb.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="pn54w67rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cloud-upload"} {...others} />);
}

export default Component;

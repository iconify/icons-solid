import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-918hb8z.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="l-918hb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cloud-thunder-filled"} {...others} />);
}

export default Component;

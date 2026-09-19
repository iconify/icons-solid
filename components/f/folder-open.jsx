import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7i-_hv-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p7i-_hv-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:folder-open"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocssg7g_j.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="ocssg7g_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:bluetooth-b"} {...others} />);
}

export default Component;

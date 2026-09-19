import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scsv6ubbs.css';
import '../../css/n/nxv1jnq8k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="scsv6ubbs"/><path class="nxv1jnq8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:reply-all"} {...others} />);
}

export default Component;

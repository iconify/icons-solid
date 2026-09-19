import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5vhxnbck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5vhxnbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:compress-arrows-alt"} {...others} />);
}

export default Component;

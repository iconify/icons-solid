import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqbelnb7h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iqbelnb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:network-ups-tools-light"} {...others} />);
}

export default Component;

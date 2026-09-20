import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcf0u5b1y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kcf0u5b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:socket-io-dark"} {...others} />);
}

export default Component;

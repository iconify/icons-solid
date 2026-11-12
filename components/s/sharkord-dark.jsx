import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl117jbyi.css';
import '../../css/i/ipbgiccho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tl117jbyi"/><path class="ipbgiccho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sharkord-dark"} {...others} />);
}

export default Component;

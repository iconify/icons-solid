import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s034ffble.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="s034ffble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-cloud-off-cloud-network-internet-disable-server-off"} {...others} />);
}

export default Component;

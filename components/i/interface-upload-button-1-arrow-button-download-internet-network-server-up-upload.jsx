import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjnkxhlvx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="jjnkxhlvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-upload-button-1-arrow-button-download-internet-network-server-up-upload"} {...others} />);
}

export default Component;

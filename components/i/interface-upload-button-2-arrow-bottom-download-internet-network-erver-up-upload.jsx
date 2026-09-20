import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sieahlmzp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="sieahlmzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-upload-button-2-arrow-bottom-download-internet-network-erver-up-upload"} {...others} />);
}

export default Component;

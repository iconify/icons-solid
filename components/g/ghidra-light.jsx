import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9q3jccrn.css';
import '../../css/m/m920y4n8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k9q3jccrn"/><path class="m920y4n8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ghidra-light"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gth9q0crr.css';
import '../../css/i/ia3sgrbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gth9q0crr"/><path class="ia3sgrbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:storage-hdd-2"} {...others} />);
}

export default Component;

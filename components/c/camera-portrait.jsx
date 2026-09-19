import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1u6ybcci.css';
import '../../css/g/gtmkv731h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1u6ybcci"/><path class="gtmkv731h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-portrait"} {...others} />);
}

export default Component;

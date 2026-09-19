import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czq8nj3ot.css';
import '../../css/t/t-nlx2bxo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="czq8nj3ot"/><path class="t-nlx2bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:edge-device"} {...others} />);
}

export default Component;

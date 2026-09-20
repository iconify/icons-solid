import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii82hnrhg.css';
import '../../css/l/lzpmdx6fy.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="ii82hnrhg"/><path class="lzpmdx6fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cloud-rain"} {...others} />);
}

export default Component;

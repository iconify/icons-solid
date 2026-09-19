import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7ncarbqz.css';
import '../../css/x/xm09adb0q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c7ncarbqz"/><path class="xm09adb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-hpc"} {...others} />);
}

export default Component;

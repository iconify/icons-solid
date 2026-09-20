import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl0y-5bdj.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="rl0y-5bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:data-transfer-upload"} {...others} />);
}

export default Component;

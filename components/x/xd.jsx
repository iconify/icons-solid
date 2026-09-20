import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccj7lubgn.css';
import '../../css/k/kdw8ckbee.css';

const viewBox = {"width":240,"height":234};
const content = `<path class="ccj7lubgn"/><path class="kdw8ckbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:xd"} {...others} />);
}

export default Component;

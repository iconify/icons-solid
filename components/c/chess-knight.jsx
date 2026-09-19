import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmr10_dtq.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="cmr10_dtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:chess-knight"} {...others} />);
}

export default Component;

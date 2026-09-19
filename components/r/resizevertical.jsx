import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2iyb1b_w.css';

const viewBox = {"width":641,"height":1024};
const content = `<path class="c2iyb1b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:resizevertical"} {...others} />);
}

export default Component;

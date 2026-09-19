import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryht7gr-d.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="ryht7gr-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:pause"} {...others} />);
}

export default Component;

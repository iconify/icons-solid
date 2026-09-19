import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv-1gie-f.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="yv-1gie-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:trash-arrow-up"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9xrsg4jo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9xrsg4jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:brush-3-line"} {...others} />);
}

export default Component;

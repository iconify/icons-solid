import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb8_k2byl.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="wb8_k2byl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:resizefull"} {...others} />);
}

export default Component;

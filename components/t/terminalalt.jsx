import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suqnk2net.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="suqnk2net"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:terminalalt"} {...others} />);
}

export default Component;

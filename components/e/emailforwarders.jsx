import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j05ms3bzq.css';

const viewBox = {"width":1025,"height":1023};
const content = `<path class="j05ms3bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:emailforwarders"} {...others} />);
}

export default Component;

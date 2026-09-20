import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh9kv6vns.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yh9kv6vns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tipi-campsite-with-pound"} {...others} />);
}

export default Component;

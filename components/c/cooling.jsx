import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysj6xpb-f.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ysj6xpb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cooling"} {...others} />);
}

export default Component;

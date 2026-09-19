import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2bbw8bjh.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="w2bbw8bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:shopping"} {...others} />);
}

export default Component;

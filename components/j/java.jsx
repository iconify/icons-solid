import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvp8sf1-e.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="jvp8sf1-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:java"} {...others} />);
}

export default Component;

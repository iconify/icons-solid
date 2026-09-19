import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdh9m0b9e.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="gdh9m0b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:handpinch"} {...others} />);
}

export default Component;

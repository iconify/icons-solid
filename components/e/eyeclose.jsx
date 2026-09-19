import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7f_54bml.css';

const viewBox = {"width":1024,"height":1023};
const content = `<path class="i7f_54bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:eyeclose"} {...others} />);
}

export default Component;

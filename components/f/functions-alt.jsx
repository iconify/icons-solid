import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc1e6ys7l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fc1e6ys7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:functions-alt"} {...others} />);
}

export default Component;

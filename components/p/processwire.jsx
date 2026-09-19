import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7wt5d-rl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n7wt5d-rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:processwire"} {...others} />);
}

export default Component;

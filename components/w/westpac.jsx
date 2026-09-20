import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbtmjqbhg.css';
import '../../css/g/g_8nuxb3n.css';

const viewBox = {"width":153.85,"height":30.475,"left":-0.863,"top":-0.863};
const content = `<path class="nbtmjqbhg"/><path class="g_8nuxb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:westpac"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jet9moexx.css';
import '../../css/k/knjswsrwz.css';
import '../../css/b/bql6r7x-s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jet9moexx"/><path class="knjswsrwz"/><path class="bql6r7x-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dataspell-wordmark"} {...others} />);
}

export default Component;

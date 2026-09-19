import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy5l9cc_i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zy5l9cc_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sulu-wordmark"} {...others} />);
}

export default Component;

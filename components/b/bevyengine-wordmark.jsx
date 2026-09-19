import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyw9ubbcq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qyw9ubbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:bevyengine-wordmark"} {...others} />);
}

export default Component;

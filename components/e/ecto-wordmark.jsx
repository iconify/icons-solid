import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atyzbqqte.css';
import '../../css/l/lqtxhpbhh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="atyzbqqte"/><path class="lqtxhpbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ecto-wordmark"} {...others} />);
}

export default Component;

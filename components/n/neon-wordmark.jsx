import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/not8szbsj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="not8szbsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:neon-wordmark"} {...others} />);
}

export default Component;

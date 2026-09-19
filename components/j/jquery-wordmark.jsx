import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy1qvyszu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vy1qvyszu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:jquery-wordmark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0pri_qum.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m0pri_qum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stackit-wordmark"} {...others} />);
}

export default Component;

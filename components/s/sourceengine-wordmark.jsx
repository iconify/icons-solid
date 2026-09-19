import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glb07y6od.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="glb07y6od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:sourceengine-wordmark"} {...others} />);
}

export default Component;

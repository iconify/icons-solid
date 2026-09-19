import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhvr9ygna.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mhvr9ygna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:stimulus-wordmark"} {...others} />);
}

export default Component;

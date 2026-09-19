import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5z6y8bma.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="g5z6y8bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:nuxt-wordmark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fept4eb5z.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fept4eb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:flyway-wordmark"} {...others} />);
}

export default Component;

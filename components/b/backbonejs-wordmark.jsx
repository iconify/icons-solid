import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftihxmlvf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ftihxmlvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:backbonejs-wordmark"} {...others} />);
}

export default Component;

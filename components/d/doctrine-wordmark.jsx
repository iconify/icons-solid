import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot3lesm0z.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ot3lesm0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:doctrine-wordmark"} {...others} />);
}

export default Component;

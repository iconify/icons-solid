import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8yzh57pl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="g8yzh57pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:redhat-wordmark"} {...others} />);
}

export default Component;

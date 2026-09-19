import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceb8-npdd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ceb8-npdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:turbo-wordmark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5gzt1b6x.css';
import '../../css/g/g0ghr3b-k.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="d5gzt1b6x"/><path class="g0ghr3b-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:reactrouter-wordmark"} {...others} />);
}

export default Component;

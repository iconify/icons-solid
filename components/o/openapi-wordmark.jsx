import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic_-zr8ts.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ic_-zr8ts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:openapi-wordmark"} {...others} />);
}

export default Component;

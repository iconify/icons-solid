import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz5go1bgr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cz5go1bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ssh-wordmark"} {...others} />);
}

export default Component;

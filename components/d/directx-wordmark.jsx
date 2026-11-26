import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e13j-rb2h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e13j-rb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:directx-wordmark"} {...others} />);
}

export default Component;

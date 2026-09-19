import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f99-2obxx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="f99-2obxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:cypressio-wordmark"} {...others} />);
}

export default Component;

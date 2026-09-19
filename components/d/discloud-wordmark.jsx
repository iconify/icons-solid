import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4cxb1bxe.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l4cxb1bxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:discloud-wordmark"} {...others} />);
}

export default Component;

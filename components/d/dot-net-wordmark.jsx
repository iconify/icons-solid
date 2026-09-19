import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg0cn4bty.css';
import '../../css/j/j9asqvqjm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zg0cn4bty"/><path clip-rule="evenodd" class="j9asqvqjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:dot-net-wordmark"} {...others} />);
}

export default Component;

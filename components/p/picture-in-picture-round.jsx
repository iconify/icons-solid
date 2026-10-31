import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdqj9mbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdqj9mbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:picture-in-picture-round"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3qvh9bhb.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p3qvh9bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:peace-hand-solid"} {...others} />);
}

export default Component;

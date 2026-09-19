import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7oztwb8k.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="y7oztwb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:globe-alt"} {...others} />);
}

export default Component;

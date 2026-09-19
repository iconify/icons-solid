import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu1ta9w8f.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="hu1ta9w8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:list-bullet"} {...others} />);
}

export default Component;

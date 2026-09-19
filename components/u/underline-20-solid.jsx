import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig8s2roze.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="ig8s2roze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:underline-20-solid"} {...others} />);
}

export default Component;

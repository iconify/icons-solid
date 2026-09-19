import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kandx6b4t.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="kandx6b4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:computer-desktop"} {...others} />);
}

export default Component;

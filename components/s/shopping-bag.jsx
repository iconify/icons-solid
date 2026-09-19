import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eis0ofcwo.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="eis0ofcwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:shopping-bag"} {...others} />);
}

export default Component;

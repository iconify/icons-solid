import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbmw3_k5z.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="cbmw3_k5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:phone-x-mark"} {...others} />);
}

export default Component;

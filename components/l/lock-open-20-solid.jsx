import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_-9w5b5h.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="j_-9w5b5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:lock-open-20-solid"} {...others} />);
}

export default Component;

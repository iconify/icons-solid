import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uky4vab5v.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="uky4vab5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:no-symbol-20-solid"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8cbc2bmg.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="q8cbc2bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:arrow-down-circle"} {...others} />);
}

export default Component;

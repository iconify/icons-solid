import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp9qvac5z.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="pp9qvac5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:arrow-long-left"} {...others} />);
}

export default Component;

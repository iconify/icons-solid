import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f10he5b7z.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="f10he5b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:musical-note"} {...others} />);
}

export default Component;

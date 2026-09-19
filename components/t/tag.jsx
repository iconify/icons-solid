import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd97j-b9x.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="pd97j-b9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:tag"} {...others} />);
}

export default Component;

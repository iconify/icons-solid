import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw5o7jb2m.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="xw5o7jb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:bars-3-center-left"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3nlvcvue.css';
import '../../css/l/llokiq9ox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3nlvcvue"/><path class="llokiq9ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-search-filled"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yod0hvbum.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yod0hvbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:folder-2"} {...others} />);
}

export default Component;

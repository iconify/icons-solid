import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq89zwbag.css';
import '../../css/c/cy-trabnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yq89zwbag"/><path class="cy-trabnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-press-filled"} {...others} />);
}

export default Component;

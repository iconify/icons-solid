import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc05_6b-l.css';
import '../../css/m/mn1a8yxak.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="yc05_6b-l"/><path clip-rule="evenodd" class="mn1a8yxak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:picture-16"} {...others} />);
}

export default Component;

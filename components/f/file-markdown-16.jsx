import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgglibcip.css';
import '../../css/o/op65_9z-v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jgglibcip"/><path clip-rule="evenodd" class="op65_9z-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:file-markdown-16"} {...others} />);
}

export default Component;

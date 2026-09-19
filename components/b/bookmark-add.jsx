import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a68wrvb8b.css';
import '../../css/g/g5xqtsbzl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a68wrvb8b"/><path class="g5xqtsbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bookmark-add"} {...others} />);
}

export default Component;

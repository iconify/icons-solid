import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4ril9bys.css';
import '../../css/j/jpg3fab-z.css';
import '../../css/y/y7lv7g-4n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e4ril9bys"/><path class="jpg3fab-z"/><path class="y7lv7g-4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:ocr"} {...others} />);
}

export default Component;

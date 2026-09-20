import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqvk4veur.css';
import '../../css/a/a1ey-7bqt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zqvk4veur"/><path class="a1ey-7bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:bookmark-list-ltr"} {...others} />);
}

export default Component;

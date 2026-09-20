import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd83ysbnr.css';
import '../../css/t/t58dp5a-u.css';
import '../../css/y/y_g4h7d1a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bd83ysbnr"/><path class="t58dp5a-u"/><path class="y_g4h7d1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-symbol-for-beginner"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxn08zbuc.css';
import '../../css/j/jfkkuwbaa.css';
import '../../css/r/rupw6qblq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxn08zbuc"/><path class="jfkkuwbaa"/><path class="rupw6qblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:speaker-line"} {...others} />);
}

export default Component;

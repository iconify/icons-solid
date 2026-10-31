import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l4o723les.css';
import '../../css/x/xjwpjterx.css';
import '../../css/f/fabla4b9k.css';
import '../../css/o/oghm6gbzy.css';
import '../../css/u/u7-upejhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l4o723les wm-shadow"/><path class="wm-shadow xjwpjterx"/><path class="fabla4b9k"/><path class="oghm6gbzy"/><path class="u7-upejhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:book-open-check"} {...others} />);
}

export default Component;

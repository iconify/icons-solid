import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bpsb1w_-w.css';
import '../../css/x/xhc0plb4l.css';
import '../../css/i/iqmhatbpx.css';
import '../../css/t/td05xox3u.css';
import '../../css/y/yy2dkybji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bpsb1w_-w wm-shadow"/><path class="wm-shadow xhc0plb4l"/><path class="iqmhatbpx"/><path class="td05xox3u"/><path class="yy2dkybji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cooking-pot"} {...others} />);
}

export default Component;

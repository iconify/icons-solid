import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lqh6gq2xh.css';
import '../../css/k/ksu2s-b0l.css';
import '../../css/q/qkh44jb8x.css';
import '../../css/k/kttgb7bkk.css';
import '../../css/z/znsxmibtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lqh6gq2xh wm-shadow"/><path class="ksu2s-b0l wm-shadow"/><path class="qkh44jb8x"/><path class="kttgb7bkk"/><path class="wm-s znsxmibtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:screen-share"} {...others} />);
}

export default Component;

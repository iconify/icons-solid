import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rreixub1u.css';
import '../../css/e/ezppmdskh.css';
import '../../css/y/yhr7tbcrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rreixub1u"/><path class="ezppmdskh"/><path class="yhr7tbcrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:media-library"} {...others} />);
}

export default Component;

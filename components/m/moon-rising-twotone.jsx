import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvgklk.css';
import '../../css/y/ydovum.css';
import '../../css/c/c_rqdr.css';
import '../../css/x/xhxeiv.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvgklk ydovum"/><path class="c_rqdr ydovum"/><path class="xhxeiv ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-rising-twotone"} {...others} />);
}

export default Component;

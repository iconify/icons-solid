import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkh622bdk.css';
import '../../css/j/j335jebjt.css';
import '../../css/d/df7y4kbsr.css';
import '../../css/j/j13xjhq4u.css';
import '../../css/d/dr_tp8gfx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nkh622bdk"/><path class="j335jebjt"/><path class="df7y4kbsr"/><path class="j13xjhq4u"/><path class="dr_tp8gfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:crying"} {...others} />);
}

export default Component;

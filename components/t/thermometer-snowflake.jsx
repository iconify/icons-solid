import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wet-l_bgq.css';
import '../../css/h/h-bkn3dhm.css';
import '../../css/s/s709upb-l.css';
import '../../css/z/zre4kaccw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wet-l_bgq"/><path class="h-bkn3dhm"/><path class="s709upb-l"/><path class="zre4kaccw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:thermometer-snowflake"} {...others} />);
}

export default Component;

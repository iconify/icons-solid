import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/ws5ialpkt.css';
import '../../css/r/rsvkr-3pv.css';
import '../../css/q/qil03rubo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ws5ialpkt"/><path class="rsvkr-3pv"/><path class="qil03rubo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:email-action-reply-1"} {...others} />);
}

export default Component;

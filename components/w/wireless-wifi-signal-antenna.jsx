import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xbw2qqb1c.css';
import '../../css/f/f1fr8e5tb.css';
import '../../css/h/hu_mhy3vt.css';
import '../../css/a/abcxsmbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xbw2qqb1c"/><path class="f1fr8e5tb"/><path class="hu_mhy3vt"/><path class="abcxsmbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wireless-wifi-signal-antenna"} {...others} />);
}

export default Component;

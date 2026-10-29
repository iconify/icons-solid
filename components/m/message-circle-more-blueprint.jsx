import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rf4w12c9e.css';
import '../../css/r/r5fftoboz.css';
import '../../css/v/v0ntukbdq.css';
import '../../css/y/y49trb-sx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rf4w12c9e wm-deco"/><path class="r5fftoboz wm-deco"/><path class="v0ntukbdq wm-k"/><path class="wm-a y49trb-sx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-circle-more-blueprint"} {...others} />);
}

export default Component;

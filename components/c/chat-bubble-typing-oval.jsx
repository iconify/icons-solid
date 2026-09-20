import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sl9bb1tup.css';
import '../../css/x/xfxs3opls.css';
import '../../css/h/hkqr7tbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sl9bb1tup"/><path class="xfxs3opls"/><path class="hkqr7tbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chat-bubble-typing-oval"} {...others} />);
}

export default Component;

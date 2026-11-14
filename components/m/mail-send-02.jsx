import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s22kwguip.css';
import '../../css/d/df-j23bjo.css';
import '../../css/a/airf7lg3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s22kwguip"/><path class="df-j23bjo"/><path class="airf7lg3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-send-02"} {...others} />);
}

export default Component;

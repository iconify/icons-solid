import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgts9bcxv.css';
import '../../css/e/eatt2w9xb.css';
import '../../css/l/lyzbmhl9s.css';
import '../../css/i/iyl7zkbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zgts9bcxv"/><path class="eatt2w9xb"/><path class="lyzbmhl9s"/><path class="iyl7zkbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-quote"} {...others} />);
}

export default Component;

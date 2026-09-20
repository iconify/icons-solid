import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c65vfbbco.css';
import '../../css/n/n7vddrbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c65vfbbco"/><path class="n7vddrbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chat-bubble-typing-oval"} {...others} />);
}

export default Component;

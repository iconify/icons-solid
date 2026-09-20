import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfns8qjtd.css';
import '../../css/j/jfy44pbjf.css';
import '../../css/t/ty3lo0b1s.css';
import '../../css/g/gy70glzli.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yfns8qjtd"/><path class="jfy44pbjf"/><path class="ty3lo0b1s"/><path class="gy70glzli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-two-bubbles-oval"} {...others} />);
}

export default Component;

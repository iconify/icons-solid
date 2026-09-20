import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wtfkr3h4d.css';
import '../../css/s/su74hlzav.css';
import '../../css/e/ewbqctogc.css';
import '../../css/k/kzdgzvbrf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wtfkr3h4d"/><path class="su74hlzav"/><path class="ewbqctogc"/><path class="kzdgzvbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:zoom-in-gesture"} {...others} />);
}

export default Component;

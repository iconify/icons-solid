import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/g/glniabcpx.css';
import '../../css/a/aj0i5z8qi.css';
import '../../css/f/fvy3jcbuw.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="glniabcpx"/><path class="aj0i5z8qi"/><path class="fvy3jcbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:plant-1-duo"} {...others} />);
}

export default Component;

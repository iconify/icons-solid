import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/n/nnqkbpbmy.css';
import '../../css/u/ufx2yzbko.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="nnqkbpbmy"/><path class="ufx2yzbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:love-duo"} {...others} />);
}

export default Component;

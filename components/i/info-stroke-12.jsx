import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qepuaqbvx.css';
import '../../css/y/y7x7-ebdf.css';
import '../../css/s/sem3ivbpx.css';
import '../../css/f/fwoostyfw.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="qepuaqbvx"><circle class="y7x7-ebdf"/><path class="sem3ivbpx"/></g><circle class="fwoostyfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:info-stroke-12"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/us_42zbgl.css';
import '../../css/m/m3fv-ubzq.css';
import '../../css/w/wxoejbcpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="us_42zbgl"/><path class="m3fv-ubzq"/><path class="wxoejbcpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:treatment"} {...others} />);
}

export default Component;

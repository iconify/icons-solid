import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3fv-ubzq.css';
import '../../css/w/wxoejbcpk.css';
import '../../css/a/a731olsan.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m3fv-ubzq"/><path class="wxoejbcpk"/><path class="a731olsan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medicine-01"} {...others} />);
}

export default Component;

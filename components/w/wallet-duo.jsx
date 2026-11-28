import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0jddxbbq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l3y24d3cp.css';
import '../../css/l/ltkl8-bml.css';
import '../../css/d/ddyqfljgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0jddxbbq secondary"/><g class="dt0cm9dhy primary"><path class="l3y24d3cp"/><path class="ltkl8-bml"/><path class="ddyqfljgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wallet-duo"} {...others} />);
}

export default Component;

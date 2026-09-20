import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2hpjkhee.css';
import '../../css/r/rbfv-bbvh.css';
import '../../css/m/mbyfj-ygn.css';
import '../../css/g/gokt_8auk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d2hpjkhee"/><path clip-rule="evenodd" class="rbfv-bbvh"/><path clip-rule="evenodd" class="mbyfj-ygn"/><path clip-rule="evenodd" class="gokt_8auk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:credit-card-disable-flat"} {...others} />);
}

export default Component;

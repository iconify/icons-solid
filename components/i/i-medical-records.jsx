import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti2jc9bbd.css';
import '../../css/p/p1sjyybhn.css';
import '../../css/o/onse16b0q.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ti2jc9bbd"/><path class="p1sjyybhn"/><path class="onse16b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-medical-records"} {...others} />);
}

export default Component;

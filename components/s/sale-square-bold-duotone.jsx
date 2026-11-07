import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/x/xlmjlhb0a.css';
import '../../css/q/qbv4dzbrn.css';
import '../../css/k/krx8b1blc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="xlmjlhb0a"/><path class="qbv4dzbrn"/><path class="krx8b1blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sale-square-bold-duotone"} {...others} />);
}

export default Component;

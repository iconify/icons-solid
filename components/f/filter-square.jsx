import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m74_d7bth.css';
import '../../css/k/ky4ks4bzv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m74_d7bth"/><path class="ky4ks4bzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:filter-square"} {...others} />);
}

export default Component;

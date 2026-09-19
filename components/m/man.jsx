import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o91nh_bfw.css';
import '../../css/h/ho9rhbcpb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="o91nh_bfw"/><path class="ho9rhbcpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:man"} {...others} />);
}

export default Component;

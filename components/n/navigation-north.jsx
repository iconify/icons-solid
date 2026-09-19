import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/m/mhz856bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="mhz856bmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:navigation-north"} {...others} />);
}

export default Component;

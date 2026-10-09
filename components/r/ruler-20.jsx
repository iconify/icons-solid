import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6etv2b0x.css';
import '../../css/q/qy70odgzs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v6etv2b0x"/><path class="qy70odgzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ruler-20"} {...others} />);
}

export default Component;

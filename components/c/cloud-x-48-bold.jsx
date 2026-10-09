import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-8v5fp5o.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/o/owkodgw5v.css';
import '../../css/v/vp5mg1bkv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l-8v5fp5o"/><path class="hwjgqrbah"/><path class="owkodgw5v"/><path class="vp5mg1bkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-x-48-bold"} {...others} />);
}

export default Component;

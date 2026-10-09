import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz2l3p02o.css';
import '../../css/t/tb-omd_8w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gz2l3p02o"/><path class="tb-omd_8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rolling-pin-20-bold"} {...others} />);
}

export default Component;

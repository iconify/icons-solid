import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhg7ko28s.css';
import '../../css/y/ywq58thzo.css';
import '../../css/o/oh1_vxmzz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lhg7ko28s"/><path class="ywq58thzo"/><path class="oh1_vxmzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crew-transfer-vessel-20"} {...others} />);
}

export default Component;

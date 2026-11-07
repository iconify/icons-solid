import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcnfpbj7d.css';
import '../../css/p/pzl1-q55o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcnfpbj7d"/><path class="pzl1-q55o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-minimalistic-bold-duotone"} {...others} />);
}

export default Component;

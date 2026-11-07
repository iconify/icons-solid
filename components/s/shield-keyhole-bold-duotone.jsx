import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoqk-f2dc.css';
import '../../css/i/ixj_x3vjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xoqk-f2dc"/><path class="ixj_x3vjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-keyhole-bold-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5zp_6bpu.css';
import '../../css/y/ynlpaobkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y5zp_6bpu"/><path class="ynlpaobkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:facebook-messenger"} {...others} />);
}

export default Component;

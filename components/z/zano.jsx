import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvftp6bcy.css';
import '../../css/i/i3i0qbcpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zvftp6bcy"/><path class="i3i0qbcpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zano"} {...others} />);
}

export default Component;

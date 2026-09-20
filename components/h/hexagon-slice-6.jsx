import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncs3bccmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ncs3bccmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hexagon-slice-6"} {...others} />);
}

export default Component;

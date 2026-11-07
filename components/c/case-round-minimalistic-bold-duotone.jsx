import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6h0z-b7o.css';
import '../../css/v/vkg5fb8sm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6h0z-b7o"/><path class="vkg5fb8sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-minimalistic-bold-duotone"} {...others} />);
}

export default Component;

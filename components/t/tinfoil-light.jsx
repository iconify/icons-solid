import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgvbcfb3d.css';
import '../../css/x/x_in5db1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vgvbcfb3d"/><path class="x_in5db1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tinfoil-light"} {...others} />);
}

export default Component;

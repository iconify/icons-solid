import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzkfv2_pz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzkfv2_pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:pause"} {...others} />);
}

export default Component;

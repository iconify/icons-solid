import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m38t_g0lu.css';

const viewBox = {"width":344,"height":408};
const content = `<path class="m38t_g0lu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:directions-subway"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4udjm4ma.css';
import '../../css/p/pzq_i-bca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4udjm4ma"/><path class="pzq_i-bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-bold-duotone"} {...others} />);
}

export default Component;

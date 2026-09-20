import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3x_g1b_y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a3x_g1b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:almalinux-dark"} {...others} />);
}

export default Component;

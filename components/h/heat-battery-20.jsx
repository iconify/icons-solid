import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt5zfkb5n.css';
import '../../css/k/kx34z-i_j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vt5zfkb5n"/><path class="kx34z-i_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-battery-20"} {...others} />);
}

export default Component;

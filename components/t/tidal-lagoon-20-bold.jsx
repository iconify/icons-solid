import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kak06wnga.css';
import '../../css/z/z0454qbpn.css';
import '../../css/d/djxbnjbsd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kak06wnga"/><path class="z0454qbpn"/><path class="djxbnjbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-lagoon-20-bold"} {...others} />);
}

export default Component;

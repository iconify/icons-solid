import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9v855hut.css';
import '../../css/z/z16x8k2ie.css';
import '../../css/m/m-t084bdp.css';
import '../../css/m/my95-kbph.css';
import '../../css/g/gcycwt72m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c9v855hut"/><path class="z16x8k2ie"/><path class="m-t084bdp"/><path class="my95-kbph"/><path class="gcycwt72m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-offshore-wind-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgp4x1bjw.css';
import '../../css/p/p16c5ccou.css';
import '../../css/x/x6y5_jb4k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pgp4x1bjw"/><path class="p16c5ccou"/><path class="x6y5_jb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-round-20-bold"} {...others} />);
}

export default Component;

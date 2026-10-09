import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0vijabpk.css';
import '../../css/k/k-uhcsbrk.css';
import '../../css/z/z9__b873h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i0vijabpk"/><path class="k-uhcsbrk"/><path class="z9__b873h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:van-48-bold"} {...others} />);
}

export default Component;

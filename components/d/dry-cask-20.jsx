import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iku0ku7vq.css';
import '../../css/t/t1somzbtw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iku0ku7vq"/><path class="t1somzbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dry-cask-20"} {...others} />);
}

export default Component;

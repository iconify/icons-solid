import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke-cmwbjg.css';
import '../../css/z/zthy_-bth.css';
import '../../css/r/r50nl1bwp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ke-cmwbjg"/><path class="zthy_-bth"/><path class="r50nl1bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-blending-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spu-vnbsz.css';
import '../../css/r/r4k-7obry.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="spu-vnbsz"/><path class="r4k-7obry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:box-cutter-20-bold"} {...others} />);
}

export default Component;

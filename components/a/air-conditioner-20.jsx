import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vptd66bam.css';
import '../../css/x/x88lagbcd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vptd66bam"/><path class="x88lagbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-conditioner-20"} {...others} />);
}

export default Component;

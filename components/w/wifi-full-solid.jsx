import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7gk634bm.css';
import '../../css/t/t95fy_bam.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q7gk634bm"/><path class="t95fy_bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:wifi-full-solid"} {...others} />);
}

export default Component;

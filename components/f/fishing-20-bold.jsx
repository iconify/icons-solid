import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlu1ghlpb.css';
import '../../css/r/run42fbat.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mlu1ghlpb"/><path class="run42fbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fishing-20-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fec4cjbkq.css';
import '../../css/w/wa3josb1a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fec4cjbkq"/><path class="wa3josb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevron-up-square-20-bold"} {...others} />);
}

export default Component;

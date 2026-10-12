import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud354hdiy.css';
import '../../css/f/fdn9dkb1w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ud354hdiy"/><path class="fdn9dkb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brain-20-bold"} {...others} />);
}

export default Component;

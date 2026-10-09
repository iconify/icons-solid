import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbyywfnen.css';
import '../../css/h/hz4iidbyt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lbyywfnen"/><path class="hz4iidbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:baby-20-bold"} {...others} />);
}

export default Component;

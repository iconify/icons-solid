import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt25qibgo.css';
import '../../css/e/e1d39acad.css';
import '../../css/t/tgryvbb4x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lt25qibgo"/><path class="e1d39acad"/><path class="tgryvbb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stopwatch-20"} {...others} />);
}

export default Component;

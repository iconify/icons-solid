import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-bc1ybft.css';
import '../../css/r/rqm6u7mkv.css';
import '../../css/t/t8og4ac6k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f-bc1ybft"/><path class="rqm6u7mkv"/><path class="t8og4ac6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-x-20"} {...others} />);
}

export default Component;

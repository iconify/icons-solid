import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thq_bacgc.css';
import '../../css/n/njhh4kbbo.css';
import '../../css/z/za8ynewwi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="thq_bacgc"/><path class="njhh4kbbo"/><path class="za8ynewwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washer-20"} {...others} />);
}

export default Component;

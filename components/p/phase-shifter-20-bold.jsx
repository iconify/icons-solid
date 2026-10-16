import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcea63bav.css';
import '../../css/r/rtjb2ejcv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fcea63bav"/><path class="rtjb2ejcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phase-shifter-20-bold"} {...others} />);
}

export default Component;

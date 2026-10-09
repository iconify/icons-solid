import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfgcicctr.css';
import '../../css/s/s4kbfzbzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sfgcicctr"/><path class="s4kbfzbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dice-3-20-bold"} {...others} />);
}

export default Component;

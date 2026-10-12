import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r11vufb2b.css';
import '../../css/w/wzrtz78mz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r11vufb2b"/><path class="wzrtz78mz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:banknote-20-bold"} {...others} />);
}

export default Component;

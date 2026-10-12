import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv8y42b4f.css';
import '../../css/j/j79qmbgbf.css';
import '../../css/f/f2nkggpoe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pv8y42b4f"/><path class="j79qmbgbf"/><path class="f2nkggpoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:luggage-20"} {...others} />);
}

export default Component;

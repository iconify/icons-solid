import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huaseya6u.css';
import '../../css/v/va_wj3nkc.css';
import '../../css/l/l05rrsb8g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="huaseya6u"/><path class="va_wj3nkc"/><path class="l05rrsb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:liquid-hydrogen-20-bold"} {...others} />);
}

export default Component;

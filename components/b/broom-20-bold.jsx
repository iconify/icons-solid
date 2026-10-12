import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy0ytxb8k.css';
import '../../css/u/uuwehzblr.css';
import '../../css/t/tko5-p9vc.css';
import '../../css/v/v9571zpse.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sy0ytxb8k"/><path class="uuwehzblr"/><path class="tko5-p9vc"/><path class="v9571zpse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:broom-20-bold"} {...others} />);
}

export default Component;

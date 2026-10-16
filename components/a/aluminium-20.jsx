import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytc7x632j.css';
import '../../css/w/wg7cicbcd.css';
import '../../css/j/jd1p-q44e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ytc7x632j"/><path class="wg7cicbcd"/><path class="jd1p-q44e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aluminium-20"} {...others} />);
}

export default Component;

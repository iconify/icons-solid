import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw5-nd-eu.css';
import '../../css/p/pegc-mbyz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uw5-nd-eu"/><path class="pegc-mbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-bottle-20-bold"} {...others} />);
}

export default Component;

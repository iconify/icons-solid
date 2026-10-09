import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee5vtnbjr.css';
import '../../css/h/hxpk5bbgt.css';
import '../../css/f/fo22hzbij.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ee5vtnbjr"/><path class="hxpk5bbgt"/><path class="fo22hzbij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-flow-20"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h28y0dbgc.css';
import '../../css/e/eixy3mbhj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h28y0dbgc"/><path class="eixy3mbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-rain-20-bold"} {...others} />);
}

export default Component;

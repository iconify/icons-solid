import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfo2a7bug.css';
import '../../css/x/xnnzndbop.css';
import '../../css/h/hemw72bsk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rfo2a7bug"/><path class="xnnzndbop"/><path class="hemw72bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:invoice"} {...others} />);
}

export default Component;

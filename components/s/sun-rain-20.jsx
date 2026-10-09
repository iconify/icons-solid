import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt41qcbim.css';
import '../../css/d/d122lmxog.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dt41qcbim"/><path class="d122lmxog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-rain-20"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej_v4pv_d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ej_v4pv_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:bezier-curve"} {...others} />);
}

export default Component;

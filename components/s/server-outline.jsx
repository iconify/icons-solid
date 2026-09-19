import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mud1l5kug.css';
import '../../css/t/tjyxhabsq.css';
import '../../css/c/crqj_mbjp.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="mud1l5kug"/><path class="tjyxhabsq"/><path class="crqj_mbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:server-outline"} {...others} />);
}

export default Component;

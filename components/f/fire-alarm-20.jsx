import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khylky-1c.css';
import '../../css/t/t-6ze0bzb.css';
import '../../css/n/non-6ivtt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="khylky-1c"/><path class="t-6ze0bzb"/><path class="non-6ivtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-alarm-20"} {...others} />);
}

export default Component;

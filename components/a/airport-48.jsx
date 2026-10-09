import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iij7ri-7j.css';
import '../../css/k/k_0c2xn7m.css';
import '../../css/s/st8n3_8ji.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iij7ri-7j"/><path class="k_0c2xn7m"/><path class="st8n3_8ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airport-48"} {...others} />);
}

export default Component;

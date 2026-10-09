import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8qaagfdl.css';
import '../../css/t/teo_t3bjd.css';
import '../../css/y/yg0rsvfpa.css';
import '../../css/p/pbaroequs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l8qaagfdl"/><path class="teo_t3bjd"/><path class="yg0rsvfpa"/><path class="pbaroequs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trash-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsm-zt1sg.css';
import '../../css/e/eg_g120yy.css';
import '../../css/h/hy4sx7b2f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dsm-zt1sg"/><path class="eg_g120yy"/><path class="hy4sx7b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scissors-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlosulb6e.css';
import '../../css/b/b9isaca6x.css';
import '../../css/b/bfo_vpyhu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wlosulb6e"/><path class="b9isaca6x"/><path class="bfo_vpyhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-dropper-48-bold"} {...others} />);
}

export default Component;

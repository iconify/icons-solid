import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s39lty8yq.css';
import '../../css/p/pxbhfjnuz.css';
import '../../css/w/w9ncmcb-w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s39lty8yq"/><path class="pxbhfjnuz"/><path class="w9ncmcb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pharmacy-48"} {...others} />);
}

export default Component;

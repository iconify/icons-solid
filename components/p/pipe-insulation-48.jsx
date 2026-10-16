import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1ayl8bhm.css';
import '../../css/w/wf0j1sc4d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s1ayl8bhm"/><path class="wf0j1sc4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-insulation-48"} {...others} />);
}

export default Component;

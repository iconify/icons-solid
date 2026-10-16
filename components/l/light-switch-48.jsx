import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie-wxdblp.css';
import '../../css/t/tqdfodbmv.css';
import '../../css/p/p8s_xtbie.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ie-wxdblp"/><path class="tqdfodbmv"/><path class="p8s_xtbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:light-switch-48"} {...others} />);
}

export default Component;

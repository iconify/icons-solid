import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wupo9cczk.css';
import '../../css/b/bubgyx1xt.css';
import '../../css/e/e-arpva-e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wupo9cczk"/><path class="bubgyx1xt"/><path class="e-arpva-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lathe-48-bold"} {...others} />);
}

export default Component;

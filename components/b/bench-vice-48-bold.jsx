import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs-1v6bed.css';
import '../../css/x/x4a8ysb7l.css';
import '../../css/w/wkchaul0v.css';
import '../../css/d/dw16-vbkn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hs-1v6bed"/><path class="x4a8ysb7l"/><path class="wkchaul0v"/><path class="dw16-vbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bench-vice-48-bold"} {...others} />);
}

export default Component;

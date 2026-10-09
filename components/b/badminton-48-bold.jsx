import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_07ucb-p.css';
import '../../css/z/znfn-zmom.css';
import '../../css/f/f1udcubwc.css';
import '../../css/h/h28-9ombi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r_07ucb-p"/><path class="znfn-zmom"/><path class="f1udcubwc"/><path class="h28-9ombi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badminton-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laksrub_s.css';
import '../../css/n/n_odgsabd.css';
import '../../css/e/ejx72qubu.css';
import '../../css/n/nsnkgmbvl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="laksrub_s"/><path class="n_odgsabd"/><path class="ejx72qubu"/><path class="nsnkgmbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-48"} {...others} />);
}

export default Component;

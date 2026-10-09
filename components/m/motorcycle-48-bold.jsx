import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m091oxbzr.css';
import '../../css/p/p-bs16b4r.css';
import '../../css/t/tzmu4f8me.css';
import '../../css/q/qfmb5ts5r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m091oxbzr"/><path class="p-bs16b4r"/><path class="tzmu4f8me"/><path class="qfmb5ts5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motorcycle-48-bold"} {...others} />);
}

export default Component;

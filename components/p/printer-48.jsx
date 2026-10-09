import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p40y1yr6g.css';
import '../../css/b/brao9d3ic.css';
import '../../css/q/q0h_mcezk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p40y1yr6g"/><path class="brao9d3ic"/><path class="q0h_mcezk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-48"} {...others} />);
}

export default Component;

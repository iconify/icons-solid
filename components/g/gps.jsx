import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aam2fvvmq.css';
import '../../css/r/rro4m3eny.css';
import '../../css/s/s-ujgf9tk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/r050nobfo.css';
import '../../css/c/cirnjda0e.css';
import '../../css/u/u7zm16btu.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="aam2fvvmq"><path class="rro4m3eny"/><path class="s-ujgf9tk"/></g><g class="ij2x_72vy"><path class="r050nobfo"/><circle class="cirnjda0e"/><path class="u7zm16btu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:gps"} {...others} />);
}

export default Component;

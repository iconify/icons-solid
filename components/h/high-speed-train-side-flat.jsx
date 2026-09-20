import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sldp7ibzz.css';
import '../../css/p/peinprb6j.css';
import '../../css/d/dacqocoug.css';
import '../../css/d/d0jaynbfk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="sldp7ibzz"/><path clip-rule="evenodd" class="peinprb6j"/><path class="dacqocoug"/><path clip-rule="evenodd" class="d0jaynbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:high-speed-train-side-flat"} {...others} />);
}

export default Component;

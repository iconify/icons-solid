import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejwb0ubio.css';
import '../../css/w/whpncgbes.css';
import '../../css/k/kvpmxozen.css';
import '../../css/a/aufk1uq_n.css';
import '../../css/j/jnje3l14m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ejwb0ubio"/><path class="whpncgbes"/><path class="kvpmxozen"/><path class="aufk1uq_n"/><path class="jnje3l14m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sos-stencil"} {...others} />);
}

export default Component;

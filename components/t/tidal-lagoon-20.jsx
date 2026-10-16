import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mikvgmbwr.css';
import '../../css/x/x2fx8vb2p.css';
import '../../css/e/e5rhf-ewl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mikvgmbwr"/><path class="x2fx8vb2p"/><path class="e5rhf-ewl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-lagoon-20"} {...others} />);
}

export default Component;

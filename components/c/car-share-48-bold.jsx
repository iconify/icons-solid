import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/e/ep-2z258c.css';
import '../../css/z/ze5uznlaj.css';
import '../../css/k/k5_rrbbac.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="ep-2z258c"/><path class="ze5uznlaj"/><path class="k5_rrbbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-share-48-bold"} {...others} />);
}

export default Component;

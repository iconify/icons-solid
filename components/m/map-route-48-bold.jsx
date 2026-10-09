import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d822ibkfm.css';
import '../../css/p/pmvqjsbun.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d822ibkfm"/><path class="pmvqjsbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-route-48-bold"} {...others} />);
}

export default Component;

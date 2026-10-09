import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw2_5ib7o.css';
import '../../css/u/ul_8xabfd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gw2_5ib7o"/><path class="ul_8xabfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-conditioner-48-bold"} {...others} />);
}

export default Component;

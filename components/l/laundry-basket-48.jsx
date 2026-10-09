import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkt9q_b2i.css';
import '../../css/p/pczwsit1r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gkt9q_b2i"/><path class="pczwsit1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laundry-basket-48"} {...others} />);
}

export default Component;

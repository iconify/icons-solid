import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_pz3rxhk.css';
import '../../css/q/qu3n5acxu.css';
import '../../css/o/osw6h0b9v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y_pz3rxhk"/><path class="qu3n5acxu"/><path class="osw6h0b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:budget-48-bold"} {...others} />);
}

export default Component;

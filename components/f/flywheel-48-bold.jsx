import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oum63jbgm.css';
import '../../css/d/dg95q9b0l.css';
import '../../css/g/g7b-z_b_l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oum63jbgm"/><path class="dg95q9b0l"/><path class="g7b-z_b_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flywheel-48-bold"} {...others} />);
}

export default Component;

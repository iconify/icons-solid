import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkmlt_lmx.css';
import '../../css/m/m4o-xp_cr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hkmlt_lmx"/><path class="m4o-xp_cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nozzle-20"} {...others} />);
}

export default Component;

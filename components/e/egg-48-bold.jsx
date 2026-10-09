import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bulyt4ubp.css';
import '../../css/n/n6-nt1bjj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bulyt4ubp"/><path class="n6-nt1bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:egg-48-bold"} {...others} />);
}

export default Component;

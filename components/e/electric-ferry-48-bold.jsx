import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va76gu84o.css';
import '../../css/d/d5_bi6_gk.css';
import '../../css/f/f_17pacdf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="va76gu84o"/><path class="d5_bi6_gk"/><path class="f_17pacdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-ferry-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpxa9ub0u.css';
import '../../css/b/bwb32mb4h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rpxa9ub0u"/><path class="bwb32mb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-fuel-48"} {...others} />);
}

export default Component;

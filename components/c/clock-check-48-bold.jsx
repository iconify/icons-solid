import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq1625qbk.css';
import '../../css/v/v0h99ub0p.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vq1625qbk"/><path class="v0h99ub0p"/><path class="y9mg2tbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-check-48-bold"} {...others} />);
}

export default Component;

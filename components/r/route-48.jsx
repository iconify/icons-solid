import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/em_gclcem.css';
import '../../css/n/nfttrft0r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="em_gclcem"/><path class="nfttrft0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:route-48"} {...others} />);
}

export default Component;

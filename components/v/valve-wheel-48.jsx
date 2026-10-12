import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd10_3lgv.css';
import '../../css/u/uo2fs-9le.css';
import '../../css/n/nvpqntokq.css';
import '../../css/g/gkp75vytj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fd10_3lgv"/><path class="uo2fs-9le"/><path class="nvpqntokq"/><path class="gkp75vytj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:valve-wheel-48"} {...others} />);
}

export default Component;

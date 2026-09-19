import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ekoozwbhq.css';
import '../../css/c/csilaps2y.css';
import '../../css/n/nz2-r9bsm.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ekoozwbhq"/><rect class="csilaps2y"/><path class="nz2-r9bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:hardware-chip-outline"} {...others} />);
}

export default Component;

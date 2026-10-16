import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ske3-m5ph.css';
import '../../css/s/scl-k_bqr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ske3-m5ph"/><path class="scl-k_bqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-shield-20-bold"} {...others} />);
}

export default Component;

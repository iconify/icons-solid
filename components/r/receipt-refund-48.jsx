import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oegrs6bql.css';
import '../../css/s/sdign8ysz.css';
import '../../css/k/kl3wgccdm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oegrs6bql"/><path class="sdign8ysz"/><path class="kl3wgccdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:receipt-refund-48"} {...others} />);
}

export default Component;

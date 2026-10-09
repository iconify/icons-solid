import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3qc5obqr.css';
import '../../css/m/mwc9o5b_m.css';
import '../../css/i/ine-7ac_y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s3qc5obqr"/><path class="mwc9o5b_m"/><path class="ine-7ac_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ore-48-bold"} {...others} />);
}

export default Component;

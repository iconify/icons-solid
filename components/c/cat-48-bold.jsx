import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk_lpbr1e.css';
import '../../css/c/cmf_awb5e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lk_lpbr1e"/><path class="cmf_awb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cat-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3m-yssgr.css';
import '../../css/t/tr-eedcjf.css';
import '../../css/i/ijk0j0bkf.css';
import '../../css/y/ywt-i_b0o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r3m-yssgr"/><path class="tr-eedcjf"/><path class="ijk0j0bkf"/><path class="ywt-i_b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pizza-oven-48-bold"} {...others} />);
}

export default Component;

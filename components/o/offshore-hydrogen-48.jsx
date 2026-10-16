import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no6y62xbm.css';
import '../../css/x/xm0_l8bjf.css';
import '../../css/l/ldpfqnboz.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="no6y62xbm"/><path class="xm0_l8bjf"/><path class="ldpfqnboz"/><path class="c65-ehvfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-hydrogen-48"} {...others} />);
}

export default Component;

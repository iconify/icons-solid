import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_jk-9bgq.css';
import '../../css/m/mr762oh0x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k_jk-9bgq"/><path class="mr762oh0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kerbside-charger-48"} {...others} />);
}

export default Component;

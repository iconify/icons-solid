import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r29txbtvf.css';
import '../../css/w/wif1j2bxi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r29txbtvf"/><path class="wif1j2bxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:italic-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzyoq6bkv.css';
import '../../css/m/mhm-ij5vt.css';
import '../../css/x/xipv2cbae.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tzyoq6bkv"/><path class="mhm-ij5vt"/><path class="xipv2cbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lamp-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogq5qbbkl.css';
import '../../css/z/ztf_3vb_o.css';
import '../../css/w/whmh-fbae.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ogq5qbbkl"/><path class="ztf_3vb_o"/><path class="whmh-fbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:first-aid-48-bold"} {...others} />);
}

export default Component;

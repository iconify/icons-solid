import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv9xlxb3o.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/t/tlvvk8-lt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xv9xlxb3o"/><path class="hwjgqrbah"/><path class="tlvvk8-lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-minus-48-bold"} {...others} />);
}

export default Component;

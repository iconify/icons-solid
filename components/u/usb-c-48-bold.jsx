import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hca0avbef.css';
import '../../css/g/gmcm_xa4f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hca0avbef"/><path class="gmcm_xa4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:usb-c-48-bold"} {...others} />);
}

export default Component;

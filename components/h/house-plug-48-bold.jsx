import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfpjugbvy.css';
import '../../css/z/z-tcgdc3x.css';
import '../../css/p/p_uvnbins.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfpjugbvy"/><path class="z-tcgdc3x"/><path class="p_uvnbins"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-plug-48-bold"} {...others} />);
}

export default Component;

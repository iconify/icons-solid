import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmvltcbxl.css';
import '../../css/f/fhr9nlrmx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vmvltcbxl"/><path class="fhr9nlrmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weld-seam-48-bold"} {...others} />);
}

export default Component;

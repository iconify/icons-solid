import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpkg76b-y.css';
import '../../css/h/hbmkvs6fl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tpkg76b-y"/><path class="hbmkvs6fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulation-roll-20"} {...others} />);
}

export default Component;

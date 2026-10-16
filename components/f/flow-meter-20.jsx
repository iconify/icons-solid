import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myl6d8w3w.css';
import '../../css/b/b4otazbmd.css';
import '../../css/k/krk28sopl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="myl6d8w3w"/><path class="b4otazbmd"/><path class="krk28sopl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-meter-20"} {...others} />);
}

export default Component;

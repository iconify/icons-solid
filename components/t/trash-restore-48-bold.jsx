import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcwfyf16x.css';
import '../../css/l/lfgx0yqjl.css';
import '../../css/g/gvtf67ctb.css';
import '../../css/u/ucn402gew.css';
import '../../css/k/kuaiedclu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pcwfyf16x"/><path class="lfgx0yqjl"/><path class="gvtf67ctb"/><path class="ucn402gew"/><path class="kuaiedclu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trash-restore-48-bold"} {...others} />);
}

export default Component;

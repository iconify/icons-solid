import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz85szbfs.css';
import '../../css/n/n0jbx_btg.css';
import '../../css/e/ew9dzee3t.css';
import '../../css/a/aip36mint.css';
import '../../css/m/mmux6pkuu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mz85szbfs"/><path class="n0jbx_btg"/><path class="ew9dzee3t"/><path class="aip36mint"/><path class="mmux6pkuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-dark"} {...others} />);
}

export default Component;

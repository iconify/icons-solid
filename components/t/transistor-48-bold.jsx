import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owfef_bia.css';
import '../../css/e/e8e1iqbrn.css';
import '../../css/m/m7c60mbxm.css';
import '../../css/b/bz-wdcbdw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="owfef_bia"/><path class="e8e1iqbrn"/><path class="m7c60mbxm"/><path class="bz-wdcbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transistor-48-bold"} {...others} />);
}

export default Component;

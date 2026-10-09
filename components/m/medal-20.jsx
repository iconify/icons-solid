import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa8cast3m.css';
import '../../css/q/qxzfcfqis.css';
import '../../css/p/p10chkbow.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oa8cast3m"/><path class="qxzfcfqis"/><path class="p10chkbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:medal-20"} {...others} />);
}

export default Component;

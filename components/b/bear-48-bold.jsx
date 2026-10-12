import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-w8eybpe.css';
import '../../css/o/oi7kg_bvr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e-w8eybpe"/><path class="oi7kg_bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bear-48-bold"} {...others} />);
}

export default Component;

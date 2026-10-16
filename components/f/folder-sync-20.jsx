import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3me-4caq.css';
import '../../css/k/kvxb8_bsg.css';
import '../../css/s/sii7hvb1q.css';
import '../../css/l/l1sf0vffp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c3me-4caq"/><path class="kvxb8_bsg"/><path class="sii7hvb1q"/><path class="l1sf0vffp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-sync-20"} {...others} />);
}

export default Component;

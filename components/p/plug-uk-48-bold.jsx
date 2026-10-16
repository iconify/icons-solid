import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef0-97kcs.css';
import '../../css/p/plk_--7pi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ef0-97kcs"/><path class="plk_--7pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-uk-48-bold"} {...others} />);
}

export default Component;

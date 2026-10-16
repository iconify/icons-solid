import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sysz87b-k.css';
import '../../css/k/k5mfz-beo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sysz87b-k"/><path class="k5mfz-beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workflow-48-bold"} {...others} />);
}

export default Component;

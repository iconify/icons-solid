import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvyikx3qg.css';
import '../../css/f/fwh01mbsc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qvyikx3qg"/><path class="fwh01mbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:distribution-board-48"} {...others} />);
}

export default Component;

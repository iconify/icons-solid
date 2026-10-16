import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-flw2bql.css';
import '../../css/x/x-3i40bye.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m-flw2bql"/><path class="x-3i40bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-waste-48"} {...others} />);
}

export default Component;

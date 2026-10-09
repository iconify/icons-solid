import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-0gtbbyk.css';
import '../../css/n/nvnghdcdo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y-0gtbbyk"/><path class="nvnghdcdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:apartment-48"} {...others} />);
}

export default Component;

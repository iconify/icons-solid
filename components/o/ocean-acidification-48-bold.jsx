import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcwf1bbrc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vcwf1bbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ocean-acidification-48-bold"} {...others} />);
}

export default Component;

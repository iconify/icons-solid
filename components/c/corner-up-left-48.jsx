import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7o8wb3mz.css';
import '../../css/f/fcdm3_xoh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x7o8wb3mz"/><path class="fcdm3_xoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-up-left-48"} {...others} />);
}

export default Component;

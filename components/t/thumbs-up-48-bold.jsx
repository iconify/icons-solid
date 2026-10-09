import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3x9rfeak.css';
import '../../css/e/ebzb5lb2r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m3x9rfeak"/><path class="ebzb5lb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thumbs-up-48-bold"} {...others} />);
}

export default Component;

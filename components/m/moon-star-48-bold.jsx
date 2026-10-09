import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faamz_bdw.css';
import '../../css/u/uv8trf44e.css';
import '../../css/b/bswze6tia.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="faamz_bdw"/><path class="uv8trf44e"/><path class="bswze6tia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-star-48-bold"} {...others} />);
}

export default Component;

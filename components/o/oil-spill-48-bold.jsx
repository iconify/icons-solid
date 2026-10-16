import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpi-8x__k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fpi-8x__k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-spill-48-bold"} {...others} />);
}

export default Component;

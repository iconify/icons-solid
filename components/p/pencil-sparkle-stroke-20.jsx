import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul0vswbpp.css';
import '../../css/q/qggpi_b3i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ul0vswbpp"/><path class="qggpi_b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pencil-sparkle-stroke-20"} {...others} />);
}

export default Component;

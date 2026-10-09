import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdoju7bng.css';
import '../../css/v/vbtr2ykcx.css';
import '../../css/z/zkd6-wbyc.css';
import '../../css/h/h11x-xb0c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qdoju7bng"/><path class="vbtr2ykcx"/><path class="zkd6-wbyc"/><path class="h11x-xb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomass-48"} {...others} />);
}

export default Component;

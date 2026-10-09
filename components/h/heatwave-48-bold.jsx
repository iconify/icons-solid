import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz-knsbvd.css';
import '../../css/l/lj7gdpblt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vz-knsbvd"/><path class="lj7gdpblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heatwave-48-bold"} {...others} />);
}

export default Component;

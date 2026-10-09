import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwhfb7nyc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mwhfb7nyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-forecast-48-bold"} {...others} />);
}

export default Component;

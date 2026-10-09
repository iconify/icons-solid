import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmxj-_ahy.css';
import '../../css/m/muoaj3btf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wmxj-_ahy"/><path class="muoaj3btf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-stream-turbine-48-bold"} {...others} />);
}

export default Component;

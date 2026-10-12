import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwvj6mb8y.css';
import '../../css/m/mz-9qgswv.css';
import '../../css/v/vao3mhbsj.css';
import '../../css/g/g87xp5bho.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gwvj6mb8y"/><path class="mz-9qgswv"/><path class="vao3mhbsj"/><path class="g87xp5bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-car-48-bold"} {...others} />);
}

export default Component;

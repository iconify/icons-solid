import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnn54cb4h.css';
import '../../css/m/mhloycbtk.css';
import '../../css/f/fl7_klb8v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jnn54cb4h"/><path class="mhloycbtk"/><path class="fl7_klb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-ccw-48-bold"} {...others} />);
}

export default Component;

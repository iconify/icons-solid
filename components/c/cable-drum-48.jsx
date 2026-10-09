import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/j/j3eacdoxs.css';
import '../../css/c/crigknl9d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="j3eacdoxs"/><path class="crigknl9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-drum-48"} {...others} />);
}

export default Component;

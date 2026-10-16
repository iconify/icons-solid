import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1pz1vb_r.css';
import '../../css/t/ta3buzrzl.css';
import '../../css/n/np48uqbyl.css';
import '../../css/s/sd5g5m95o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y1pz1vb_r"/><path class="ta3buzrzl"/><path class="np48uqbyl"/><path class="sd5g5m95o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fertiliser-48-bold"} {...others} />);
}

export default Component;

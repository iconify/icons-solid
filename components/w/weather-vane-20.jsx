import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwzdr3l_o.css';
import '../../css/d/drba2d7_i.css';
import '../../css/l/lxvj2gbfp.css';
import '../../css/m/mqankgyhb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vwzdr3l_o"/><path class="drba2d7_i"/><path class="lxvj2gbfp"/><path class="mqankgyhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weather-vane-20"} {...others} />);
}

export default Component;

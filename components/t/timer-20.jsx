import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi_j_db9s.css';
import '../../css/d/dhxs8ubvn.css';
import '../../css/z/zstpfjybv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oi_j_db9s"/><path class="dhxs8ubvn"/><path class="zstpfjybv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timer-20"} {...others} />);
}

export default Component;

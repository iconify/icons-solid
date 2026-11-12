import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlx-9kbbc.css';
import '../../css/j/j9bg-6ovb.css';
import '../../css/q/q8gh54b1j.css';
import '../../css/e/ectfl7b1s.css';
import '../../css/p/p_z4wwf6p.css';
import '../../css/b/bbniey5_f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mlx-9kbbc"/><path class="j9bg-6ovb"/><path class="q8gh54b1j"/><path class="ectfl7b1s"/><path class="p_z4wwf6p"/><path class="bbniey5_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:immich-frame"} {...others} />);
}

export default Component;

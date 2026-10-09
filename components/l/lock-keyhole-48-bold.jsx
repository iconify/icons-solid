import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm6x03w9o.css';
import '../../css/q/q5_nrjb0f.css';
import '../../css/m/mlj68nbxk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lm6x03w9o"/><path class="q5_nrjb0f"/><path class="mlj68nbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-keyhole-48-bold"} {...others} />);
}

export default Component;

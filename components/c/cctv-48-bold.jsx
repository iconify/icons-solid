import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_2osyyfp.css';
import '../../css/l/lyxku8b_i.css';
import '../../css/x/x1-hkebth.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n_2osyyfp"/><path class="lyxku8b_i"/><path class="x1-hkebth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cctv-48-bold"} {...others} />);
}

export default Component;

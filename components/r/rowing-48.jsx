import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pktuq_lkk.css';
import '../../css/n/n1bc5gv3h.css';
import '../../css/l/l-h20ibdt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pktuq_lkk"/><path class="n1bc5gv3h"/><path class="l-h20ibdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rowing-48"} {...others} />);
}

export default Component;

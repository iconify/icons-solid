import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw81v4b0k.css';
import '../../css/k/kx-x5p24u.css';
import '../../css/t/tah-fgebz.css';
import '../../css/q/qsti3bbut.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cw81v4b0k"/><path class="kx-x5p24u"/><path class="tah-fgebz"/><path class="qsti3bbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gantry-crane-48-bold"} {...others} />);
}

export default Component;

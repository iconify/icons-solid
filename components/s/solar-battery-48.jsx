import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6an7pvvv.css';
import '../../css/b/b17e7nbsz.css';
import '../../css/u/uyd0dabdt.css';
import '../../css/o/ocywhlbwe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u6an7pvvv"/><path class="b17e7nbsz"/><path class="uyd0dabdt"/><path class="ocywhlbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-battery-48"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsmhpgwcs.css';
import '../../css/c/c_1sw_nww.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsmhpgwcs"/><path class="c_1sw_nww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:picture-in-picture-48"} {...others} />);
}

export default Component;

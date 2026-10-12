import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb0rmwb_o.css';
import '../../css/n/n_tg6m2do.css';
import '../../css/f/f_6f76wwl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yb0rmwb_o"/><path class="n_tg6m2do"/><path class="f_6f76wwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cash-register-48-bold"} {...others} />);
}

export default Component;

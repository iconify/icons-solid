import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp_3l1bkn.css';
import '../../css/b/bf-ekebvc.css';
import '../../css/v/vwtrngb6y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fp_3l1bkn"/><path class="bf-ekebvc"/><path class="vwtrngb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:light-switch-20-bold"} {...others} />);
}

export default Component;

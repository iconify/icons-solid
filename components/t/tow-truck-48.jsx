import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnnymsbii.css';
import '../../css/l/lai5ftb8v.css';
import '../../css/d/d_2bnvy8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wnnymsbii"/><path class="lai5ftb8v"/><path class="d_2bnvy8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tow-truck-48"} {...others} />);
}

export default Component;

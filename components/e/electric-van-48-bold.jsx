import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il6d4vbnm.css';
import '../../css/o/o244yobqh.css';
import '../../css/d/d39zil3no.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="il6d4vbnm"/><path class="o244yobqh"/><path class="d39zil3no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-van-48-bold"} {...others} />);
}

export default Component;

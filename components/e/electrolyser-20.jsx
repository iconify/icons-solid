import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cozw5lxrq.css';
import '../../css/w/wkvt3obva.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cozw5lxrq"/><path class="wkvt3obva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-20"} {...others} />);
}

export default Component;

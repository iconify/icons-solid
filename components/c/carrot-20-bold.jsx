import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l361dvbca.css';
import '../../css/h/hud-elbct.css';
import '../../css/a/ahkc9jbbp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l361dvbca"/><path class="hud-elbct"/><path class="ahkc9jbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carrot-20-bold"} {...others} />);
}

export default Component;

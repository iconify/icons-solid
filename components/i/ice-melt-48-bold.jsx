import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_zubmb7j.css';
import '../../css/a/aqwmpmxfg.css';
import '../../css/d/d8xmubcoe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b_zubmb7j"/><path class="aqwmpmxfg"/><path class="d8xmubcoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-melt-48-bold"} {...others} />);
}

export default Component;

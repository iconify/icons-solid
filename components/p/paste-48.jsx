import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxzfl5btn.css';
import '../../css/e/ekw862bgh.css';
import '../../css/d/d8p7d1b8q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lxzfl5btn"/><path class="ekw862bgh"/><path class="d8p7d1b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paste-48"} {...others} />);
}

export default Component;

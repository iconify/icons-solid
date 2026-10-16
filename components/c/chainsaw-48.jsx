import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tht13fb0t.css';
import '../../css/d/d9xo1bc7m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tht13fb0t"/><path class="d9xo1bc7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chainsaw-48"} {...others} />);
}

export default Component;

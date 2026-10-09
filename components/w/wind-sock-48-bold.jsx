import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l359dqins.css';
import '../../css/d/dcw38u4hx.css';
import '../../css/f/f7u3lacne.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l359dqins"/><path class="dcw38u4hx"/><path class="f7u3lacne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-sock-48-bold"} {...others} />);
}

export default Component;

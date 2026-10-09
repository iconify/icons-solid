import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klcw8eg5x.css';
import '../../css/s/s55bi35kx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="klcw8eg5x"/><path class="s55bi35kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frame-48-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lirqjjpoc.css';
import '../../css/r/rhxmnnb7m.css';
import '../../css/s/sri-3sbls.css';
import '../../css/i/i435drbbm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lirqjjpoc"/><path class="rhxmnnb7m"/><path class="sri-3sbls"/><path class="i435drbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-terminal-20"} {...others} />);
}

export default Component;

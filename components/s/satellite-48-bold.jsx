import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia6zlxdrk.css';
import '../../css/w/wp13yub7p.css';
import '../../css/c/cl2lae65c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ia6zlxdrk"/><path class="wp13yub7p"/><path class="cl2lae65c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-48-bold"} {...others} />);
}

export default Component;

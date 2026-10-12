import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7c_5vb9e.css';
import '../../css/m/mqkco8bnf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7c_5vb9e"/><path class="mqkco8bnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clapperboard-48-bold"} {...others} />);
}

export default Component;

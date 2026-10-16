import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijs8fxbia.css';
import '../../css/r/ro9_j1_cs.css';
import '../../css/e/eilf2ebne.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ijs8fxbia"/><path class="ro9_j1_cs"/><path class="eilf2ebne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-canopy-20"} {...others} />);
}

export default Component;

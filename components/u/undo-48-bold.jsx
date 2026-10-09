import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3w_jjzoh.css';
import '../../css/f/fu6xpoo5r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l3w_jjzoh"/><path class="fu6xpoo5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:undo-48-bold"} {...others} />);
}

export default Component;

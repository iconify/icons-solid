import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jnk632ntg.css';
import '../../css/d/dpilwv84i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jnk632ntg"/><path class="dpilwv84i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:toggle-on"} {...others} />);
}

export default Component;

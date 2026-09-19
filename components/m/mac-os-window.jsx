import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j0b34b2wg.css';
import '../../css/u/ubvi1w8wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j0b34b2wg"/><path class="ubvi1w8wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mac-os-window"} {...others} />);
}

export default Component;

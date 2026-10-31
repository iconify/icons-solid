import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wf1qzqceu.css';
import '../../css/q/qu119kboz.css';
import '../../css/j/jvqy27bgy.css';
import '../../css/f/f8c5uldmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wf1qzqceu wm-shadow"/><path class="qu119kboz wm-shadow"/><path class="jvqy27bgy"/><path class="f8c5uldmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:paint-roller"} {...others} />);
}

export default Component;

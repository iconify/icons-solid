import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z88udtbmu.css';
import '../../css/o/omi8og4ui.css';
import '../../css/n/n0rktabcu.css';
import '../../css/w/wtcrh6brh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z88udtbmu"/><path class="omi8og4ui wm-shadow"/><path class="n0rktabcu"/><path class="wtcrh6brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:circle"} {...others} />);
}

export default Component;

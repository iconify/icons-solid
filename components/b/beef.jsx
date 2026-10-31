import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0c8wpusp.css';
import '../../css/p/p_sre292p.css';
import '../../css/p/pi4848bel.css';
import '../../css/e/e00gi6b_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c0c8wpusp wm-shadow"/><path class="p_sre292p wm-shadow"/><path class="pi4848bel"/><path class="e00gi6b_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:beef"} {...others} />);
}

export default Component;

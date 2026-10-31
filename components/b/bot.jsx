import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pxn7uxd0b.css';
import '../../css/n/n0viuuyml.css';
import '../../css/m/mfrjwluok.css';
import '../../css/s/s0okuubdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pxn7uxd0b wm-shadow"/><path class="n0viuuyml wm-shadow"/><path class="mfrjwluok"/><path class="s0okuubdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bot"} {...others} />);
}

export default Component;

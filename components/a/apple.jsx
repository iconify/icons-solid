import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fvr3jsble.css';
import '../../css/g/gbq5i-bmx.css';
import '../../css/s/sh51cwb0x.css';
import '../../css/p/pdike1b1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fvr3jsble wm-shadow"/><path class="gbq5i-bmx wm-shadow"/><path class="sh51cwb0x"/><path class="pdike1b1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:apple"} {...others} />);
}

export default Component;

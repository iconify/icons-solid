import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fnfctw6un.css';
import '../../css/u/uugk94daf.css';
import '../../css/q/q90ibrbvw.css';
import '../../css/w/wa_l-6bwp.css';
import '../../css/g/g1j1je9rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fnfctw6un wm-shadow"/><path class="uugk94daf wm-shadow"/><path class="q90ibrbvw"/><path class="wa_l-6bwp"/><path class="g1j1je9rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:thermometer"} {...others} />);
}

export default Component;

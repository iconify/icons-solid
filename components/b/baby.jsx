import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wfg6-hbjv.css';
import '../../css/s/skzzn88al.css';
import '../../css/n/n3slx0uls.css';
import '../../css/m/mri8kfbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wfg6-hbjv wm-shadow"/><path class="skzzn88al wm-shadow"/><path class="n3slx0uls"/><path class="mri8kfbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:baby"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uevac7bxh.css';
import '../../css/p/prfcp972p.css';
import '../../css/j/j1ujs8bze.css';
import '../../css/y/yakhk6ech.css';
import '../../css/v/vbk7g-bfc.css';
import '../../css/f/fqswembnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uevac7bxh wm-k"/><path class="prfcp972p wm-a"/><path class="j1ujs8bze wm-deco"/><path class="wm-k yakhk6ech"/><path class="vbk7g-bfc wm-a"/><path class="fqswembnz wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:bath"} {...others} />);
}

export default Component;

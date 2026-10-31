import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/che47zb5i.css';
import '../../css/m/m5h_g-b5j.css';
import '../../css/s/spe_r7b2a.css';
import '../../css/a/a5dblsbwj.css';
import '../../css/d/dnr4o821s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="che47zb5i wm-shadow"/><path class="m5h_g-b5j wm-shadow"/><path class="spe_r7b2a"/><path class="a5dblsbwj"/><path class="dnr4o821s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-moon"} {...others} />);
}

export default Component;

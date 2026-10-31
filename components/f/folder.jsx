import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cyutu9jes.css';
import '../../css/j/j0wg9tb9m.css';
import '../../css/i/izi2x0_he.css';
import '../../css/n/n75ffj65y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cyutu9jes wm-shadow"/><path class="j0wg9tb9m wm-shadow"/><path class="izi2x0_he"/><path class="n75ffj65y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:folder"} {...others} />);
}

export default Component;

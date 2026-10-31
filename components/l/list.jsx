import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q8o2n5b_z.css';
import '../../css/i/iu1bzab0p.css';
import '../../css/z/znqedx-ve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q8o2n5b_z wm-shadow"/><path class="iu1bzab0p wm-shadow"/><path class="znqedx-ve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list"} {...others} />);
}

export default Component;

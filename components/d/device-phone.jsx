import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyuoj61bc.css';
import '../../css/z/zip0f5bhz.css';
import '../../css/p/p08yfabth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 5.39 22.25)" class="zyuoj61bc"/><rect transform="rotate(-90 5.39 22.25)" class="zip0f5bhz"/><path class="p08yfabth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone"} {...others} />);
}

export default Component;

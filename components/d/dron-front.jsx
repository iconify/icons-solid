import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af80hsbam.css';
import '../../css/w/wdums2bxu.css';
import '../../css/n/n3ezsdbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 15.5 14.53)" class="af80hsbam"/><rect transform="matrix(0 -1 -1 0 15.5 14.53)" class="wdums2bxu"/><path class="n3ezsdbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dron-front"} {...others} />);
}

export default Component;

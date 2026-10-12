import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyymnv7_v.css';
import '../../css/f/fha2em57a.css';
import '../../css/c/c5cjyruta.css';
import '../../css/o/od-9jmg4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gyymnv7_v"/><path class="fha2em57a"/><rect transform="matrix(0 -1 -1 0 16 16)" class="c5cjyruta"/><path class="od-9jmg4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bring-to-front"} {...others} />);
}

export default Component;

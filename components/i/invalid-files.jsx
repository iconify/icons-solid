import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utoaypbgw.css';
import '../../css/g/g5wik2b5z.css';
import '../../css/w/wcs-rgbvt.css';
import '../../css/i/it2au1p5y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="utoaypbgw"/><path class="g5wik2b5z"/><path class="wcs-rgbvt"/><path class="it2au1p5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:invalid-files"} {...others} />);
}

export default Component;

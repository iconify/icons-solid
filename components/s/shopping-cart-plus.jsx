import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/asvg_owdu.css';
import '../../css/s/ssfpmpzhf.css';
import '../../css/j/jzrn2slps.css';
import '../../css/m/m2rusw92g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="asvg_owdu wm-shadow"/><path class="ssfpmpzhf wm-shadow"/><path class="jzrn2slps"/><path class="m2rusw92g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shopping-cart-plus"} {...others} />);
}

export default Component;

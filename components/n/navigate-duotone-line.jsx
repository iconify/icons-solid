import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9_mk0t0o.css';
import '../../css/a/aynyspbri.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGfEGBUcgw"><g class="ft5dv1b6b"><path class="y9_mk0t0o"/><path class="aynyspbri"/></g></mask></defs><path mask="url(#SVGfEGBUcgw)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:navigate-duotone-line"} {...others} />);
}

export default Component;

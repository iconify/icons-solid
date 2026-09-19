import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gej4692dd.css';
import '../../css/t/t89m29bes.css';
import '../../css/h/hkp_qu3py.css';
import '../../css/p/pvotfl8ci.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGbDH6ubpA)" class="gej4692dd"><path class="t89m29bes"/><path class="hkp_qu3py"/></g><defs><clipPath id="SVGbDH6ubpA"><path class="pvotfl8ci"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:humans"} {...others} />);
}

export default Component;

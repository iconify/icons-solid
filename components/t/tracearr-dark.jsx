import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm355blxi.css';
import '../../css/c/cyewjbbxd.css';
import '../../css/h/hglfcybza.css';
import '../../css/f/f3sgcieue.css';
import '../../css/n/nsd2_z-kk.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVGp95sHdWe" class="sm355blxi"/></defs><path class="cyewjbbxd"/><path class="hglfcybza"/><path class="f3sgcieue"/><path class="nsd2_z-kk"/><filter id="SVG9g0xNcQJ"><feGaussianBlur stdDeviation="1"/></filter><use href="#SVGp95sHdWe" filter="url(#SVG9g0xNcQJ)"/><use href="#SVGp95sHdWe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tracearr-dark"} {...others} />);
}

export default Component;

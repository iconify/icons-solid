import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxbhw41yr.css';
import '../../css/u/utnw8fb2g.css';
import '../../css/z/zpw3qubjo.css';
import '../../css/o/ob55j3bhb.css';
import '../../css/r/r3v0uitgd.css';
import '../../css/p/pbardtbqy.css';
import '../../css/u/u5yaf0kdi.css';
import '../../css/q/qddo_h5ij.css';
import '../../css/x/x5hr8inuc.css';
import '../../css/f/ff0jixw7r.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)"><path class="oxbhw41yr"/><path class="utnw8fb2g"/><path class="zpw3qubjo"/><path class="ob55j3bhb"/><path class="r3v0uitgd"/><path class="pbardtbqy"/><path class="u5yaf0kdi"/><path class="qddo_h5ij"/><path class="x5hr8inuc"/><path class="ff0jixw7r"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:gift-reciept-duo"} {...others} />);
}

export default Component;
